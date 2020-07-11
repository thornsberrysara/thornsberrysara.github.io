class DonutMaker {
    constructor() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.multiplierCount = 1;
      this.autoClickerCost = 100;
      this.multiplierCost = 10;
      this.donutDisplay = donutDisplay;
      this.autoClicksDisplay = autoClicksDisplay;
      this.autoClickPurchaseButton = autoClickPurchaseButton;
      this.multiplierDisplay = multiplierDisplay;
      this.multiplierPurchaseButton = multiplierPurchaseButton;
    }
  
    increaseDonutsAfterClick() {
      const newDonutCount = this.donutCount + this.multiplierCount;
      this.donutCount = Math.round(newDonutCount * 100) / 100;
      this.updateDonutDisplay();
    }
  
    updateDonutDisplay() {
      this.donutDisplay.innerText = "DONUTS: " + this.donutCount;
    }
  
    subtractDonutsAfterClickerPurchase() {
      this.donutCount -= this.autoClickerCost;
      this.updateDonutDisplay();
    }
  
    increaseAutoClickerCount() {
      this.autoClickerCount++;
      this.updateAutoClickerCount();
    }
  
    updateAutoClickerCount() {
      this.autoClicksDisplay.innerText = this.autoClickerCount;
    }
  
    increaseCostOfAutoClicker() {
      const newAutoClickerCost = this.autoClickerCost * 1.1;
      this.autoClickerCost = Math.round(newAutoClickerCost * 100) / 100;
      this.updateCostOfAutoClicker();
    }
  
    updateCostOfAutoClicker() {
      this.autoClickPurchaseButton.innerText =
        "PURCHASE AUTO CLICKER FOR: " + this.autoClickerCost;
    }
  
    purchaseAutoClicker() {
      if (this.donutCount >= this.autoClickerCost) {
        this.subtractDonutsAfterClickerPurchase();
        this.increaseAutoClickerCount();
        this.increaseCostOfAutoClicker();
        this.playRegister();
      }
      return;
    }
  
    subtractDonutsAfterMultiplierPurchase() {
      this.donutCount -= this.multiplierCost;
      this.updateDonutDisplay();
    }
  
    increaseMultiplierCount() {
      this.multiplierCount += 0.2;
      this.updateMultiplierCount();
    }
  
    updateMultiplierCount() {
      this.multiplierDisplay.innerText = this.multiplierCount + "x";
    }
  
    increaseCostOfMultiplier() {
      const newMultiplierCost = this.multiplierCost * 1.1;
      this.multiplierCost = Math.round(newMultiplierCost * 100) / 100;
      this.updateCostOfMultiplier();
    }
  
    updateCostOfMultiplier() {
      this.multiplierPurchaseButton.innerText =
        "PURCHASE MULTIPLIER COST: " + this.multiplierCost;
    }
  
    purchaseMultiplier() {
      if (this.donutCount >= this.multiplierCost) {
        this.subtractDonutsAfterMultiplierPurchase();
        this.increaseMultiplierCount();
        this.increaseCostOfMultiplier();
        this.playRegister();
      }
      return;
    }
  
    reset() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.multiplierCount = 1;
      this.autoClickerCost = 100;
      this.multiplierCost = 10;
      this.updateDonutDisplay();
      this.updateAutoClickerCount();
      this.updateMultiplierCount();
      this.updateCostOfAutoClicker();
      this.updateCostOfMultiplier();
    }
  
    playRegister() {
      audioRegister.play();
      audioRegister.currentTime = 0;
    }
  }