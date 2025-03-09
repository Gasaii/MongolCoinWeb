let tg = window.Telegram.WebApp;
tg.expand(); 

// Загружаем баланс из localStorage (если нет — ставим 0)
let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
let balanceDisplay = document.getElementById("balance");
let mineButton = document.getElementById("mineButton");

// Обновляем отображение баланса
balanceDisplay.textContent = balance;

mineButton.addEventListener("click", (event) => {
    event.preventDefault(); // **Останавливаем стандартное поведение**

    balance += 1;  
    balanceDisplay.textContent = balance;

    // Сохраняем баланс в localStorage
    localStorage.setItem("balance", balance);

    // Отправляем данные в бота **без закрытия WebApp**
    tg.sendData(JSON.stringify({ add_coins: 1 }));

    // **Принудительно оставляем WebApp открытым**
    setTimeout(() => tg.expand(), 50);
});
