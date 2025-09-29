import TelegramBot from 'node-telegram-bot-api';

export const startHandler = (bot: TelegramBot, msg: TelegramBot.Message, webAppUrl: string) => {
  const chatId = msg.chat.id;
  const userName = msg.from?.first_name || 'Друг';

  const welcomeMessage = `
🌸 Добро пожаловать в салон красоты "Grace", ${userName}! 

✨ Теперь доступно новое веб-приложение! Здесь вы можете:
📱 Открыть полнофункциональное приложение
📅 Записаться на прием онлайн
💅 Посмотреть услуги и цены
👩‍💼 Выбрать мастера
📍 Узнать информацию о салоне

Выберите интересующий раздел 👇
  `;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: '✨ Открыть приложение Grace',
          web_app: { url: webAppUrl }
        }
      ],
      [
        {
          text: '📅 Записаться на прием',
          callback_data: 'book_appointment'
        }
      ],
      [
        {
          text: '💅 Наши услуги',
          callback_data: 'services'
        },
        {
          text: '👩‍💼 Мастера',
          callback_data: 'masters'
        }
      ],
      [
        {
          text: '❓ Помощь',
          callback_data: 'help'
        }
      ]
    ]
  };

  console.log(`👋 Пользователь ${userName} (${chatId}) запустил бота`);
  console.log(`📤 Отправляем сообщение пользователю ${userName}...`);
  
  bot.sendMessage(chatId, welcomeMessage, {
    reply_markup: keyboard,
    parse_mode: 'HTML'
  }).then((sentMessage) => {
    console.log(`✅ Сообщение успешно отправлено пользователю ${userName} (${chatId})`);
    console.log(`📨 ID сообщения: ${sentMessage.message_id}`);
  }).catch((error) => {
    console.error(`❌ Ошибка отправки сообщения пользователю ${userName} (${chatId}):`, error.message);
    console.error(`🔍 Полная ошибка:`, error);
  });
};
