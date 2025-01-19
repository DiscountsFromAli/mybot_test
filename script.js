// Ініціалізуємо Telegram Web App
const tg = window.Telegram.WebApp;

// Налаштовуємо кнопку
const openSiteButton = document.getElementById('openSiteButton');
openSiteButton.addEventListener('click', () => {
    tg.openLink('https://sites.google.com/view/discounts-from-ali/');
});

// Автоматично розширюємо Web App на весь екран
tg.expand();
