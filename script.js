// Инициализация баланса
let currentBalance = 0;

const balanceElement = document.getElementById("balance");
const tapButton = document.getElementById("tapButton");

// Функция обработки нажатия кнопки
function handleTap() {
    // Увеличиваем баланс
    currentBalance += 1;
    balanceElement.textContent = currentBalance;

    // Создаем эффект вылетающих коинов
    createCoinEffect();
    
    // Отправляем данные в Telegram (если нужно)
    window.Telegram.WebApp.sendData('{"add_coins":1}');
}

// Функция создания эффекта вылетающих коинов
function createCoinEffect() {
    const coinFx = document.createElement('img');
    coinFx.src = "https://i.postimg.cc/1tLVthMj/2203534-cash-coin-money-value-icon.png"; // Используем ту же монету
    coinFx.classList.add('coin-fx');

    // Получаем позицию центра кнопки
    const rect = tapButton.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Устанавливаем начальную позицию монеты
    coinFx.style.left = `${centerX - 30}px`; // Центрируем монету
    coinFx.style.top = `${centerY - 30}px`;

    // Добавляем монету в DOM
    document.body.appendChild(coinFx);

    // После анимации удаляем монету
    setTimeout(() => {
        coinFx.remove();
    }, 1000);
}

// Прикрепляем обработчик события нажатия на кнопку
tapButton.addEventListener('click', handleTap);
