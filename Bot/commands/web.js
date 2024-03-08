module.exports = (bot) => {
  const web_link = "https://ahmadroshanfar.github.io/React_TelegramBot/";

  bot.command("web", (ctx) => {
    ctx.reply("web app", {
      reply_markup: {
        keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
      },
    });
  });
};
