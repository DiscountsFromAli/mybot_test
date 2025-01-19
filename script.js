// Ініціалізуємо Telegram Web App
const tg = window.Telegram.WebApp;

// Налаштовуємо кнопку
const openSiteButton = document.getElementById('openSiteButton');
openSiteButton.addEventListener('click', () => {
    // Відкриваємо посилання на сайт
    window.open('https://example.com', '_blank'); // Змініть на ваш сайт
});

// Автоматично розширюємо Web App на весь екран
tg.expand();
