const sizeSmall = 'small';
const sizeLarge = 'large';
const stuffingCheese = 'cheese';
const stuffingSalad = 'salad';
const stuffingPotato = 'potato';
const toppingMayo = 'mayo';
const toppingSauce = 'sauce';

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static get SizeSmall() {
    return sizeSmall;
  }

  static get SizeLarge() {
    return sizeLarge;
  }

  static get StuffingCheese() {
    return stuffingCheese;
  }

  static get StuffingSalad() {
    return stuffingSalad;
  }

  static get StuffingPotato() {
    return stuffingPotato;
  }

  static get ToppingMayo() {
    return toppingMayo;
  }

  static get ToppingSauce() {
    return toppingSauce;
  }

  calculatePrice() {
    let price = 0;

    switch (this.size) {
      case sizeSmall:
        price += 50;
        break;
      case sizeLarge:
        price += 100;
        break;
    }

    switch (this.stuffing) {
      case stuffingCheese:
        price += 10;
        break;
      case stuffingSalad:
        price += 20;
        break;
      case stuffingPotato:
        price += 15;
        break;
    }

    this.toppings.forEach(topping => {
      switch (topping) {
        case toppingMayo:
          price += 20;
          break;
        case toppingSauce:
          price += 15;
          break;
      }
    });

    return price;
  }

  calculateCalories() {
    let calories = 0;

    switch (this.size) {
      case sizeSmall:
        calories += 20;
        break;
      case sizeLarge:
        calories += 40;
        break;
    }

    switch (this.stuffing) {
      case stuffingCheese:
        calories += 20;
        break;
      case stuffingSalad:
        calories += 5;
        break;
      case stuffingPotato:
        calories += 10;
        break;
    }

    this.toppings.forEach(topping => {
      switch (topping) {
        case toppingMayo:
          calories += 5;
          break;
        case toppingSauce:
          break;
      }
    });

    return calories;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const hamburger = new Hamburger(Hamburger.SizeSmall, Hamburger.StuffingCheese);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.ToppingMayo);
console.log("Price with mayo: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.ToppingSauce);
console.log("Price with sauce: " + hamburger.calculatePrice());