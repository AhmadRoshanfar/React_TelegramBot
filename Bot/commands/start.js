const { Context } = require("telegraf");

module.exports = (bot) => {
  bot.start((ctx) => {
    const username = ctx.chat.username;
    // const flowerEmoji = "\u{1F33A}";

    const welcome_message = `
    سلام ${username} عزیز🌹

    به ربات من خوش آمدید
    
    /start - شروع
    /help - راهنما
    
    /web - نسخه وب
    
    /off - تخفیف
    /cart - لیست خرید
    /new - محصولات جدید
    
    /instagram - آدرس اینستاگرام

    /contact - شماره تماس ما
    /location - ارسال لوکیشن
    
    /tracking - رهگیری بسته‌های پستی
    /orders - لیست سفارش‌ها
    /search - سرچ کردن محصول
    
    /address - آدرس شما
    
    @onTimeGallery_bot
    
      `;
    ctx.reply(welcome_message);
  });
};
