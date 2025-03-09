document.addEventListener("DOMContentLoaded", function () {
    let tg = window.Telegram.WebApp; // Подключаем WebApp API

    tg.expand(); // Разворачиваем WebApp на весь экран

    document.getElementById("btn").addEventListener("click", function () {
        let data = { action: "get_balance" }; // Данные для бота

        tg.sendData(JSON.stringify(data)); // Отправляем JSON-объект в бота
        tg.close(); // Закрываем WebApp после отправки
    });
});
