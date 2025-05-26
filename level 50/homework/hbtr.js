function serveCoffee(coffeType) {
    if (coffeeType === 1) {
      return "Americano";
    } else if (coffeeType === 2) {
      return "Espresso";
    } else if (coffeeType === 3) {
      return "Cappuccino";
    } else {
      return "Unknown";
    }
  }
  
  console.log(serveCoffee(1)); 
  console.log(serveCoffee(4)); 
  