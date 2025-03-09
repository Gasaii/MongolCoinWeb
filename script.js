// Initialize balance
let currentBalance = 0;

const balanceElement = document.getElementById("balance");
const tapButton = document.getElementById("tapButton");

// Function to handle the button tap
function handleTap() {
    // Increment balance and update the display
    currentBalance += 1;
    balanceElement.textContent = currentBalance;

    // Notify the Telegram bot about the user's action
    window.Telegram.WebApp.sendData('{"add_coins":1}');
}

// Attach the event listener to the button
tapButton.addEventListener('click', handleTap);
