module.exports = (bot) => {
  // Set up your commands
  const commands = [
    { command: "start", description: "شروع" },
    { command: "help", description: "راهنمایی" },
    { command: "web", description: "وب اپلیکیشن" },
    { command: "off", description: "محصولات تخفیف‌دار" },
    { command: "cart", description: "سبد خرید" },
    { command: "new", description: "محصولات جدید" },
    { command: "instagram", description: "پست‌های آخر اینستاگرام" },
    { command: "contact", description: "ارتباط با ما" },
    { command: "location", description: "لوکیشن ما" },
    { command: "tracking", description: "رهگیری بسته‌های پستی" },
    { command: "orders", description: "سفارش‌ها" },
    { command: "serach", description: "سرچ" },
    { command: "address", description: "آدرس و کد پستی شما" },
    // Add more buttons as needed
  ];

  // Set your commands as a persistent menu
  bot.telegram.setMyCommands(commands);
  // bot.telegram.setco(commands);

  // Handle the commands
  bot.command("button1", (ctx) => ctx.reply("You clicked on Button 1"));
  bot.command("button2", (ctx) => ctx.reply("You clicked on Button 2"));
};
