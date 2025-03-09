let tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем WebApp

// Загружаем баланс из localStorage (если нет — ставим 0)
let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
let balanceDisplay = document.getElementById("balance");
let mineButton = document.getElementById("mineButton");

// Обновляем отображение баланса
balanceDisplay.textContent = balance;

mineButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Останавливаем стандартное поведение

    balance += 1;  
    balanceDisplay.textContent = balance;

    // Сохраняем баланс в localStorage
    localStorage.setItem("balance", balance);

    // **Отправляем данные в бота через сервер, а НЕ через `tg.sendData()`**
    try {
        await fetch("https://ВАШ_СЕРВЕР/добавить_коин", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: tg.initDataUnsafe.user.id, add_coins: 1 })
        });
    } catch (error) {
        console.error("Ошибка при отправке данных:", error);
    }

    // **Принудительно раскрываем WebApp (если закроется)**
    setTimeout(() => tg.expand(), 100);
});
