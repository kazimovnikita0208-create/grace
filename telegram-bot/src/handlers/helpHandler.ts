import TelegramBot from 'node-telegram-bot-api';

export const helpHandler = (bot: TelegramBot, msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;

  const helpMessage = `
📋 <b>Справка по боту салона красоты "Grace"</b>

<b>Доступные команды:</b>
/start - Запустить бота и открыть главное меню
/webapp - Быстро открыть веб-приложение
/help - Показать эту справку

<b>Что можно делать в веб-приложении:</b>
✨ Записаться на услуги онлайн (маникюр, педикюр, стрижка и др.)
📅 Выбрать удобное время и мастера
💅 Просмотреть полный каталог услуг с ценами
👩‍💼 Изучить информацию о мастерах и их рейтинги
📱 Управлять своими записями

<b>Часы работы:</b>
Пн-Пт: 9:00 - 21:00
Сб-Вс: 10:00 - 20:00

<b>Контакты:</b>
📞 Телефон: +7 (XXX) XXX-XX-XX
📍 Адрес: г. Москва, ул. Примерная, д. 1

<i>✨ Новинка! Теперь доступно полнофункциональное веб-приложение!</i>
  `;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: '✨ Открыть приложение Grace',
          web_app: {
            url: 'https://grace-myzy.vercel.app'
          }
        }
      ]
    ]
  };

  bot.sendMessage(chatId, helpMessage, {
    reply_markup: keyboard,
    parse_mode: 'HTML'
  });

  console.log(`❓ Пользователь ${msg.from?.first_name} (${chatId}) запросил помощь`);
};
