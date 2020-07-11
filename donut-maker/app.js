const bakeButton = document.querySelector(".click-handler__bake-button");
const donutDisplay = document.querySelector(".click-handler__donut-display");
const autoClicksDisplay = document.querySelector(".auto-clicker__auto-clicks-display");
const autoClickPurchaseButton = document.querySelector(".auto-clicker__purchase-button");
const multiplierDisplay = document.querySelector(".click-multiplier__multiplier-display");
const multiplierPurchaseButton = document.querySelector(".click-multiplier__purchase-button");
const resetButton = document.querySelector(".reset-button");
var audioRegister = document.getElementById("register-audio");
const donutMaker = new DonutMaker();

bakeButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.increaseDonutsAfterClick();
    donutMaker.updateDonutDisplay();
})

autoClickPurchaseButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.purchaseAutoClicker();
});

multiplierPurchaseButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.purchaseMultiplier();
});

resetButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.reset();
})

function autoClickerClicks() {
    for (let i = 0; i < donutMaker.autoClickerCount; i++) {
        donutMaker.increaseDonutsAfterClick();
    }
}
setInterval(autoClickerClicks, 1000);

var audioClick = document.getElementById("click-audio"); 

function playSFX() {
    audioClick.play();
    audioClick.currentTime = 0;
} 