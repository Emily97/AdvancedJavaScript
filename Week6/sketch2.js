// --------------------------------
// Classical model for inheritance
// --------------------------------

function Car(make, model, price) {
  this.make = make;
  this.model = model;
  this.price = price;
}

Car.prototype.print = function() {
  console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}`);
};

function Electric(make, model, price, range, autonomous) {
  Car.call(this, make, model, price);
  this.range = range;
  this.autonomous = autonomous;
}

Electric.prototype.print = function() {
  console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}. The distance the car can travel is ${this.range} miles. The car is autonomous: ${this.autonomous}`);
};

const electric = new Electric('Tesla', 'X', 100000, 200, true);
electric.print();

function Petrol(make, model, price, engineSize) {
  Car.call(this, make, model, price);
  this.engineSize = engineSize;
}

Petrol.prototype.print = function() {
  console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}. The cars engine size is ${this.engineSize} Litre.`);
};

const petrol = new Petrol('Ford', 'Fiesta', 15000, 1.5)
petrol.print();

// ------------------------------------------------------------
// 'Class' in E6
// ES6 syntactic sugar for the classical model for inheritance
// ------------------------------------------------------------

class Car {
  constructor(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
  }
  print() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}`);
  }
}

class Electric extends Car {
  constructor(make, model, price, range, autonomous) {
    super(make, model, price);
    this.range = range;
    this.autonomous = autonomous;
  }
  print() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}. The distance the car can travel is ${this.range} miles. The car is autonomous: ${this.autonomous}`);
  }
}

const electric = new Electric('Tesla', 'X', 100000, 200, true);
electric.print();

class Petrol extends Car {
  constructor(make, model, price, engineSize) {
    super(make, model, price);
    this.engineSize = engineSize;
  }
  print() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}. The cars engine size is ${this.engineSize} Litre.`);
  }
}

const petrol = new Petrol('Ford', 'Fiesta', 15000, 1.5)
petrol.print();
