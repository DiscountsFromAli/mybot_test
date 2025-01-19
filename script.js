// Ініціалізуємо Telegram Web App
const tg = window.Telegram.WebApp;

// Налаштовуємо кнопку
const openSiteButton = document.getElementById('openSiteButton');
openSiteButton.addEventListener('click', () => {
    tg.openLink('https://sites.google.com/view/discounts-from-ali/');
});
const tg = window.Telegram.WebApp;

if (!tg.initData) {
    console.error("Web App не запущений в Telegram. Відкрийте його через бот.");
} else {
    console.log("Web App запущений в Telegram!");
}

// Автоматично розширюємо Web App на весь екран
tg.expand();
