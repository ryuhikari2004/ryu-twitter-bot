const config = require("./config");
const Telegram = require("telegraf/telegram");
const telegram = new Telegram(config.telegramBotToken);
const funcionesTweets = require("./tweets");

const scrape = () => {
	funcionesTweets.getLastTweetId(function (err, lastTweetId) {
		funcionesTweets.getRecentTweets(lastTweetId, function (err, tweets) {
			if(!tweets || err) {return}
			const newLastTweetId = Object.keys(tweets).length > 0 ? tweets[0].id : null;
			funcionesTweets.saveLastTweetId(newLastTweetId);
			tweets.forEach(function (tweet) {
				telegram.sendMessage(config.channelUsername, tweet.texto);
			});
		});
	});
}

module.exports = { scrape }
