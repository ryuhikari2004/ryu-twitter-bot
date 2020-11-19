const Telegraf = require("telegraf");
const config = require("./config");
const { scrape } = require("./cron.js")
const cron = require('node-cron');

cron.schedule('*/1 * * * *', scrape);

const bot = new Telegraf(config.telegramBotToken);

bot.help((ctx) => ctx.reply(config.replies.help));

bot.start((ctx) => {
	ctx.reply(config.replies.welcome);
});

bot.launch();
