// Ініціалізуємо Telegram Web App
const tg = window.Telegram.WebApp;

const openSiteButton = document.getElementById('openSiteButton');
if (openSiteButton) {
    openSiteButton.addEventListener('click', () => {
        tg.openLink('https://discountsfromali.github.io/mybot_test/');
    });
} else {
    console.error("Кнопка не знайдена!");
}
const tg = window.Telegram.WebApp;

if (!tg.initData) {
    console.error("Web App не запущений в Telegram. Відкрийте його через бот.");
} else {
    console.log("Web App запущений в Telegram!");
}

// Автоматично розширюємо Web App на весь екран
tg.expand();
