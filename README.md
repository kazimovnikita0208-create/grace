# 🌸 Grace - Telegram Web App для салона красоты

Современная система записи и управления для салона красоты с Telegram Web App интерфейсом.

## 🚀 Стек технологий

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Bot**: Node.js + node-telegram-bot-api
- **Database**: SQLite + Prisma ORM
- **Deployment**: Vercel (frontend), VPS (backend/bot)

## ✨ Особенности

- 🎨 **Современный UI/UX** с темной темой и анимациями
- 📱 **Мобильная оптимизация** для Telegram Web App
- 🔙 **Интуитивная навигация** с правильной логикой back button
- ✨ **Glassmorphism эффекты** и неоновые акценты
- 🎭 **Haptic feedback** для лучшего UX в Telegram
- 🌟 **SparklesCore анимация** на всех страницах

## 📁 Структура проекта

```
├── backend/           # Express.js API сервер
├── frontend/          # Next.js Web приложение
├── telegram-bot/      # Telegram бот
└── docs/             # Документация
```

## 📱 Страницы приложения

- **Главная** - интро с анимированным фоном
- **Запись** - система бронирования с выбором мастера
- **Услуги** - каталог с ценами и описаниями  
- **Профиль** - личный кабинет клиента
- **Мастера** - информация о специалистах

## 🛠️ Установка и запуск

### 1. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend (Express)
```bash
cd backend  
npm install
npm run dev
```

### 3. Telegram Bot
```bash
cd telegram-bot
npm install
npm run dev
```

## 🔧 Конфигурация

1. Скопируйте `env.example` в `.env` в каждой папке
2. Настройте переменные окружения
3. Получите токен бота у [@BotFather](https://t.me/botfather)
4. Настройте Web App URL в настройках бота

## 📖 Документация

- [`ПЛАН_РАЗРАБОТКИ.md`](ПЛАН_РАЗРАБОТКИ.md) - техническая спецификация
- [`frontend/DESIGN_SYSTEM.md`](frontend/DESIGN_SYSTEM.md) - система дизайна
- [`GIT_SETUP.md`](GIT_SETUP.md) - настройка репозитория

## 🎯 Статус разработки

- ✅ **Telegram Bot** - полностью готов
- ✅ **Frontend UI/UX** - завершен (85%)
- ⚠️ **Backend API** - в разработке (30%)
- ❌ **Admin Panel** - запланирован
- ❌ **Database** - требует настройки

## 🚀 Деплой

**Frontend**: Готов к деплою на Vercel  
**Backend**: Требует настройки базы данных  
**Bot**: Готов к размещению на VPS

---

Разработано с ❤️ для салона красоты Grace
