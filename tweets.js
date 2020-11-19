const config = require("./config");
const Twitter = require("twitter");
const twitter = new Twitter({
	consumer_key: config.twitter.consumerKey,
	consumer_secret: config.twitter.consumerSecret,
	access_token_key: config.twitter.accessToken,
	access_token_secret: config.twitter.accessSecret
});
const fs = require('fs');

module.exports.getRecentTweets = function (lastTweetId, callback) {
	twitter.get("statuses/user_timeline", {
		screen_name: config.twitter.username,
		count: 5,
		trim_user: true,
		since_id: lastTweetId
	}, function (error, tweets, response) {
		if (error){
			return callback(error)
		};
		console.log("Número de tweets: ", tweets.length);		
		const tweetObjs = [];
		tweets.forEach(function (tweet) {
			tweetObjs.push({
				"id": tweet.id_str,
				"texto": tweet.text
				});
		});
		return callback(null, tweetObjs);
	});
};

module.exports.getLastTweetId = function (callback) {
	fs.readFile("lastTweetId.txt", function read(err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	});
}

module.exports.saveLastTweetId = function (tweetId) {
	if (!tweetId) return false; // Don't save in case null is passed
	fs.writeFile("lastTweetId.txt", tweetId, function (err) {
		if (err) console.log(err);
	});
}
