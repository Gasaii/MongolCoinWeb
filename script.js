let tg = window.Telegram.WebApp; 
tg.expand(); 

let balance = 0;
let balanceDisplay = document.getElementById("balance");
let mineButton = document.getElementById("mineButton");

mineButton.addEventListener("click", () => {
    balance += 1;  
    balanceDisplay.textContent = balance;  

    // Отправка данных в Telegram бота
    tg.sendData(JSON.stringify({ add_coins: 1 }));
});
