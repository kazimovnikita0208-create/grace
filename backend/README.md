# Backend API для Салона Красоты

Node.js + Express.js + TypeScript backend для системы записи в салон красоты.

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Скопируйте файл `env.example` в `.env`:

```bash
copy env.example .env
```

Отредактируйте файл `.env` под ваши настройки.

### 3. Запуск

**Режим разработки:**
```bash
npm run dev
```

**Продакшн:**
```bash
npm run build
npm start
```

## 📁 Структура проекта

```
backend/
├── src/
│   ├── server.ts           # Основной файл сервера
│   ├── types/              # TypeScript типы
│   ├── routes/             # API маршруты
│   ├── models/             # Модели данных
│   ├── middleware/         # Express middleware
│   └── utils/              # Утилиты
├── prisma/                 # Схема базы данных (будет добавлено)
├── dist/                   # Скомпилированный код
├── package.json
├── tsconfig.json
└── .env
```

## 🔧 API Endpoints

### Базовые

- `GET /` - Информация о API
- `GET /api/health` - Проверка здоровья сервера

### Пользователи (будет добавлено)

- `POST /api/users` - Создание пользователя
- `GET /api/users/:telegramId` - Получение пользователя

### Услуги (будет добавлено)

- `GET /api/services` - Список услуг
- `POST /api/services` - Создание услуги (админ)

### Мастера (будет добавлено)

- `GET /api/masters` - Список мастеров
- `GET /api/masters/:id/schedule` - Расписание мастера

### Записи (будет добавлено)

- `POST /api/appointments` - Создание записи
- `GET /api/appointments/user/:userId` - Записи пользователя

## 🛠 Разработка

### Доступные команды

- `npm run dev` - Запуск в режиме разработки с автоперезагрузкой
- `npm run build` - Компиляция TypeScript
- `npm run start` - Запуск продакшн версии
- `npm run watch` - Компиляция в режиме наблюдения

### Технологии

- **Node.js** - Среда выполнения
- **Express.js** - Web framework
- **TypeScript** - Типизированный JavaScript
- **SQLite** - База данных
- **JWT** - Аутентификация
- **Helmet** - Безопасность
- **CORS** - Cross-origin requests
- **Morgan** - Логирование

## 🔐 Безопасность

- Rate limiting (100 запросов за 15 минут)
- Helmet для базовой защиты
- CORS настройки
- JWT токены для аутентификации

## 📊 Логирование

Сервер использует Morgan для логирования HTTP запросов в формате 'combined'.

## 🐛 Отладка

Ошибки логируются в консоль. В режиме разработки отображаются полные сообщения об ошибках.

## 📞 Поддержка

При возникновении проблем создайте issue в репозитории проекта.
