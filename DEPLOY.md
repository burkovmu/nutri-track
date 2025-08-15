# 🚀 Пошаговая инструкция по деплою

## Шаг 1: Подготовка проекта

1. Убедитесь, что все файлы сохранены:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `vercel.json`
   - `package.json`

2. Откройте терминал в папке проекта

## Шаг 2: Установка Vercel CLI

```bash
npm install -g vercel
```

## Шаг 3: Логин в Vercel

```bash
vercel login
```

Следуйте инструкциям в браузере для авторизации.

## Шаг 4: Деплой проекта

```bash
vercel --prod
```

При первом деплое Vercel задаст несколько вопросов:
- **Set up and deploy?** → `Y`
- **Which scope?** → Выберите ваш аккаунт
- **Link to existing project?** → `N`
- **What's your project's name?** → `nutritrack-ai` (или любое другое)
- **In which directory is your code located?** → `./` (текущая папка)
- **Want to override the settings?** → `N`

## Шаг 5: Получение URL

После успешного деплоя вы получите URL вида:
```
https://your-project-name.vercel.app
```

## Шаг 6: Настройка Telegram Mini App

### 6.1 Создание бота
1. Откройте [@BotFather](https://t.me/botfather) в Telegram
2. Отправьте команду `/newbot`
3. Укажите название бота (например: "NutriTrack AI")
4. Укажите username бота (например: `nutritrack_ai_bot`)
5. Сохраните токен бота

### 6.2 Создание Mini App
1. Отправьте команду `/newapp`
2. Выберите вашего бота
3. Укажите название приложения: `NutriTrack AI`
4. Укажите описание: `Приложение для подсчета калорий с ИИ`
5. Загрузите иконку (512x512px)
6. Укажите URL: `https://your-project-name.vercel.app`

### 6.3 Получение ссылки
После настройки вы получите ссылку:
```
https://t.me/nutritrack_ai_bot/app
```

## Шаг 7: Тестирование

1. Откройте ссылку в Telegram
2. Убедитесь, что приложение загружается корректно
3. Проверьте все функции

## 🔧 Устранение проблем

### Приложение не загружается в Telegram
- Проверьте URL в настройках Mini App
- Убедитесь, что деплой прошел успешно
- Проверьте заголовки безопасности в `vercel.json`

### Ошибки при деплое
```bash
# Проверка статуса
vercel ls

# Просмотр логов
vercel logs

# Передеплой
vercel --prod --force
```

### Обновление приложения
После внесения изменений в код:
```bash
vercel --prod
```

## 📱 Проверка работы

1. **В браузере**: `https://your-project-name.vercel.app`
2. **В Telegram**: `https://t.me/your_bot_name/app`

## 🎯 Готово!

Ваше приложение теперь доступно как Telegram Mini App и готово к использованию! 