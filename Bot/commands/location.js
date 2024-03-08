module.exports = (bot) => {
  bot.command(["location", "contact"], (ctx) => {
    ctx.reply("شماره تماس: ۰۹۱۲۹۰۲۸۸۳۲ - ۰۲۱۵۴۳۲۱۱۲۲");
    ctx.reply("آدرس: میدان پونک - پاساژ بوستان - طبقه همکف - پلاک ۱۳۲");
    bot.telegram.sendLocation(ctx.chat.id, 35.76094, 51.33429);

    bot.telegram.sendMessage(ctx.chat.id, "Welcome", {
      reply_markup: {
        inline_keyboard: [
          [
            //row one
            { text: "one", callback_data: "one" },
            { text: "Hello", callback_data: "hello" },
          ],
          //row two
          [{ text: "two", callback_data: "two" }],
        ],
      },
    });
    bot.action("one", (ctx) => {
      ctx.reply("ONEEE");
      ctx.answerCbQuery("Done");
    });
  });
};
