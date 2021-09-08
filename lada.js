  function Car (model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }
  
  Car.prototype.drive = function () {
    console.log(`${this.model} crashes.`);
  }
  
  class Lada extends Car {
    drive() {
      console.log(`${this.model} doesn't drive.`);
    }
  }

  
  let c = new Car('Lada Kalina');
  c.drive();

  
 