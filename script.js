let tg = window.Telegram.WebApp;
tg.expand(); 

// Загружаем баланс из localStorage или ставим 0
let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
let balanceDisplay = document.getElementById("balance");
let mineButton = document.getElementById("mineButton");

// Отображаем текущий баланс
balanceDisplay.textContent = balance;

mineButton.addEventListener("click", () => {
    balance += 1;  
    balanceDisplay.textContent = balance;

    // Сохраняем баланс в localStorage
    localStorage.setItem("balance", balance);

    // Отправляем данные в бота (но без закрытия WebApp)
    tg.sendData(JSON.stringify({ add_coins: 1 }));
});
