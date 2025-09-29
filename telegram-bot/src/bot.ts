import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { startHandler } from './handlers/startHandler';
import { helpHandler } from './handlers/helpHandler';

// Загружаем переменные окружения
dotenv.config();

const token = process.env.BOT_TOKEN || '8275120123:AAEDuaBvE01-WkRLWP5nLjSdc7fMjJ3vl-k';
const webAppUrl = 'https://grace-myzy.vercel.app';

console.log('🔑 Используется токен:', token.substring(0, 10) + '...');

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

console.log('🤖 Telegram бот запускается...');

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  startHandler(bot, msg, webAppUrl);
});

// Обработчик команды /help
bot.onText(/\/help/, (msg) => {
  helpHandler(bot, msg);
});

// Команда для открытия Web App
bot.onText(/\/webapp/, (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from?.first_name || 'Друг';
  
  const webAppKeyboard = {
    inline_keyboard: [
      [
        {
          text: '✨ Открыть приложение Grace',
          web_app: { url: webAppUrl }
        }
      ]
    ]
  };

  bot.sendMessage(chatId, `
🌸 ${userName}, добро пожаловать в приложение салона "Grace"!

✨ Нажмите кнопку ниже, чтобы открыть полнофункциональное веб-приложение:

📱 Запись онлайн
💅 Каталог услуг  
👩‍💼 Выбор мастера
📍 Информация о салоне
  `, { reply_markup: webAppKeyboard });
  
  console.log(`📱 Web App отправлен пользователю ${userName} (${chatId})`);
});

// Тестовая команда для проверки связи
bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🧪 Тест! Бот работает и отвечает! 🎉');
  console.log(`🧪 Тестовое сообщение отправлено пользователю ${chatId}`);
});

// Обработчик callback запросов (inline кнопки)
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message?.chat.id;
  const data = callbackQuery.data;
  const userName = callbackQuery.from.first_name;

  if (data === 'book_appointment') {
    const bookingKeyboard = {
      inline_keyboard: [
        [
          {
            text: '✨ Записаться онлайн в приложении',
            web_app: { url: `${webAppUrl}/booking` }
          }
        ],
        [
          {
            text: '📞 Позвонить в салон',
            url: 'tel:+7XXXXXXXXXX'
          }
        ]
      ]
    };

    bot.sendMessage(chatId!, `
📅 Запись на прием в салон "Grace"

✨ **Новинка!** Теперь вы можете записаться онлайн через наше веб-приложение!

🕒 Часы работы:
Пн-Пт: 9:00 - 21:00
Сб-Вс: 10:00 - 20:00

📍 Адрес: г. Москва, ул. Примерная, 1

Выберите способ записи:
    `, { reply_markup: bookingKeyboard, parse_mode: 'Markdown' });
  } else if (data === 'services') {
    const servicesKeyboard = {
      inline_keyboard: [
        [
          {
            text: '💅 Открыть полный каталог услуг',
            web_app: { url: `${webAppUrl}/services` }
          }
        ],
        [
          {
            text: '📅 Записаться на услугу',
            web_app: { url: `${webAppUrl}/booking` }
          }
        ]
      ]
    };

    bot.sendMessage(chatId!, `
💅 Наши услуги в салоне "Grace"

✂️ **Парикмахерские услуги:**
• Стрижка женская - от 2000₽
• Окрашивание - от 4500₽
• Укладка - от 1200₽

💅 **Маникюр и педикюр:**
• Маникюр - от 1500₽
• Педикюр - от 2000₽

🧴 **Косметология:**
• Массаж лица - от 2500₽
• Чистка лица - от 3000₽

✨ Посмотрите полный каталог с подробным описанием в нашем приложении!
    `, { reply_markup: servicesKeyboard, parse_mode: 'Markdown' });
  } else if (data === 'masters') {
    const mastersKeyboard = {
      inline_keyboard: [
        [
          {
            text: '👩‍💼 Выбрать мастера и записаться',
            web_app: { url: `${webAppUrl}/booking/masters` }
          }
        ],
        [
          {
            text: '📱 Связаться с салоном',
            url: 'tel:+7XXXXXXXXXX'
          }
        ]
      ]
    };

    bot.sendMessage(chatId!, `
👩‍💼 Наши мастера в салоне "Grace"

👱‍♀️ **Анна Иванова**
• Стилист-парикмахер
• Опыт: 8 лет
• Рейтинг: ⭐⭐⭐⭐⭐ 4.9

💅 **Мария Петрова**  
• Мастер маникюра и педикюра
• Опыт: 5 лет
• Рейтинг: ⭐⭐⭐⭐⭐ 4.8

🧴 **Елена Сидорова**
• Косметолог
• Опыт: 10 лет  
• Рейтинг: ⭐⭐⭐⭐⭐ 4.9

✨ Выберите мастера и запишитесь онлайн через наше приложение!
    `, { reply_markup: mastersKeyboard, parse_mode: 'Markdown' });
  } else if (data === 'help') {
    helpHandler(bot, { chat: { id: chatId! }, from: callbackQuery.from } as any);
  }

  // Подтверждаем получение callback
  bot.answerCallbackQuery(callbackQuery.id);
});

// Обработчик ошибок
bot.on('polling_error', (error) => {
  console.error('❌ Ошибка polling:', error);
});

// Обработчик успешного запуска
bot.on('polling_error', () => {});

console.log('✅ Telegram бот успешно запущен!');
console.log(`🌐 Web App URL: ${webAppUrl}`);

export default bot;
