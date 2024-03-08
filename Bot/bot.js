const { Telegraf, Markup } = require("telegraf");

const startCommand = require("./commands/start");
const webCommand = require("./commands/web");
const locationCommand = require("./commands/location");

const TOKEN = "6895314017:AAFdOndoEfbhvcKLbQtRsQ_f6V7EQeEayyU";
const bot = new Telegraf(TOKEN);

const web_link = "https://ahmadroshanfar.github.io/React_TelegramBot/";

startCommand(bot);
webCommand(bot);
locationCommand(bot);

// bot.telegram.setChatMenuButton()
// bot.command("keyboard", (ctx) =>
//   ctx.reply(
//     "Launch mini app from keyboard!",
//     Markup.keyboard([Markup.button.webApp("Launch", web_link)]).resize()
//   )
// );

bot.on("message", async (ctx) => {
  console.log(ctx.message.web_app_data);
  return ctx.reply(ctx.message.web_app_data.data);
});

// bot.on(
//   message("web_app_data", async (ctx) => {
//     // assuming sendData was called with a JSON string
//     const data = ctx.webAppData.data.json();
//     // or if sendData was called with plaintext
//     const text = ctx.webAppData.data.text();
//   })
// );

bot.launch();
