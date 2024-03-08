const { Telegraf } = require("telegraf");
const TOKEN = "6895314017:AAFdOndoEfbhvcKLbQtRsQ_f6V7EQeEayyU";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://65e96bf611dd18bc853b270a--unrivaled-crumble-461cd2.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
