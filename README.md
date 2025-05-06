# TMA React Mini App

Это клиентская часть Telegram Mini App, созданная с использованием React и Telegram Web Apps API.

## 🚀 Возможности

- Адаптивный интерфейс
- Интеграция с Telegram WebApp (`window.Telegram.WebApp`)
- Страницы: список товаров, форма данных, заголовок с кнопкой закрытия
- Отправка данных на backend по кнопке "Купить"

## 📦 Стек технологий

- React 18+
- React Router DOM 6
- Telegram Web Apps API
- Netlify (или другой хостинг для деплоя)

## 🛠️ Установка

```bash
git clone https://github.com/your-username/tg-web-app-react.git
cd tg-web-app-react
npm install
npm start
```

## 🌐 Деплой

Для Netlify:
- Build command: `npm run build`
- Publish directory: `build`
- Добавьте `netlify.toml`:

```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## 🤖 Связь с ботом

Пример кода для вызова основной кнопки и отправки данных в Telegram:

```js
tg.MainButton.setParams({
  text: "Купить"
});
tg.MainButton.show();
tg.sendData(JSON.stringify(data));
```

## 📄 Лицензия

MIT