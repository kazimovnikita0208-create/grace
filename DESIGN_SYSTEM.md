# 🎨 Система дизайна Grace - Telegram Web App

## 📋 Обзор изменений

Все страницы приложения были приведены к единому стилю с главной страницей. Теперь весь интерфейс использует темный фон с анимированными sparkles и glassmorphism эффектами.

## 🔧 Компоненты

### 1. Layout Component
- **Единый фон**: Темный фон со sparkles анимацией на всех страницах
- **Варианты фона**: `default`, `minimal`, `dark`
- **Гибкие настройки**: управление header, navigation, back button

### 2. BackButton Component
- **3 варианта**: `default`, `floating`, `minimal`
- **Логика навигации**: поддержка `href`, `onClick`, или `router.back()`
- **Haptic feedback**: тактильная обратная связь для Telegram

### 3. Header Component
- **Glassmorphism эффект**: прозрачный фон с blur
- **Интегрированная back button**: встроенная кнопка назад
- **Адаптивный дизайн**: красивые градиенты и тени

### 4. Navigation Component
- **Прозрачный стиль**: glassmorphism с backdrop blur
- **Активные состояния**: градиентные подсветки
- **Плавные переходы**: анимации 300ms

### 5. Button Component (обновлен)
- **Gradient стили**: все кнопки с градиентами
- **Backdrop blur**: полупрозрачные эффекты
- **4 варианта**: `primary`, `secondary`, `outline`, `ghost`

## 🌟 Ключевые особенности

### Единый стиль
- ✅ Темный фон со sparkles на всех страницах
- ✅ Белый текст с drop-shadow для читаемости
- ✅ Glassmorphism карточки и элементы UI
- ✅ Градиентные кнопки и акценты

### Навигация
- ✅ Кнопка "назад" на всех внутренних страницах
- ✅ Правильная логика навигации
- ✅ Поддержка Telegram back button API
- ✅ Haptic feedback при взаимодействии

### Визуальные эффекты
- ✅ SparklesCore анимация на всех страницах
- ✅ Pulse анимации для декоративных элементов
- ✅ Backdrop blur для карточек и модалов
- ✅ Неоновые акценты для важных элементов

## 📱 Обновленные страницы

### Главная страница (`/`)
- ✅ Убран дублированный фон (теперь в Layout)
- ✅ Использует Layout без header/navigation
- ✅ Полноэкранный дизайн

### Страница записи (`/booking`)
- ✅ Кнопка назад → главная
- ✅ Белый текст на темном фоне
- ✅ Glassmorphism информационные блоки

### Выбор мастера (`/booking/masters`)
- ✅ Кнопка назад → /booking
- ✅ Единый стиль с остальными страницами
- ✅ Сохранен функционал выбора

### Услуги (`/services`)
- ✅ Кнопка назад → главная
- ✅ Обновлены информационные блоки
- ✅ Градиентные акцентные карточки

### Профиль (`/profile`)
- ✅ Кнопка назад → главная
- ✅ Glassmorphism контактные блоки
- ✅ Сохранена вся функциональность

## 🔧 Технические детали

### CSS Classes
```css
.glass-effect - Glassmorphism эффект
.neon-glow - Неоновое свечение
.animate-pulse-gentle - Мягкая пульсация
.backdrop-blur-strong - Сильный blur
.transition-all-300 - Плавные переходы
```

### Layout Props
```tsx
interface LayoutProps {
  showHeader?: boolean;        // Показать header
  showNavigation?: boolean;    // Показать navigation
  title?: string;             // Заголовок
  showBackButton?: boolean;   // Показать кнопку назад
  backButtonHref?: string;    // Ссылка для кнопки назад
  backgroundVariant?: 'default' | 'minimal' | 'dark';
}
```

### BackButton Props
```tsx
interface BackButtonProps {
  href?: string;              // Ссылка для навигации
  onClick?: () => void;       // Кастомный обработчик
  variant?: 'default' | 'floating' | 'minimal';
  className?: string;
}
```

## 🎯 Результат

- **100% единый стиль** всех страниц приложения
- **Улучшенная навигация** с правильной логикой back button
- **Премиум внешний вид** с современными эффектами
- **Полная совместимость** с Telegram Web App API
- **Мобильная оптимизация** для touch интерфейсов

Все изменения протестированы и готовы к продакшн использованию! 🚀

