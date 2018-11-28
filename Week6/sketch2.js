// --------------------------------
// Classical model for inheritance
// --------------------------------

// Car class
function Car(make, model, price) {
  this.make = make;
  this.model = model;
  this.price = price;
}

// attach method to the prototype so it will be inherited
Car.prototype.logDetails = function() {
  console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}`);
};

function Electric(make, model, price, range, autonomous) {
  // call the parent constructor
  Car.call(this, make, model, price);
  this.range = range;
  this.autonomous = autonomous;
}
// Inherit from Car
Electric.prototype = Object.create(Car.prototype);
Electric.prototype.constructor = Electric;
// Override the logDetails() method
Electric.prototype.logDetails = function() {
  // call the parent method
  Car.prototype.logDetails.call(this);
  console.log(`The distance the car can travel is ${this.range} miles. The car is autonomous: ${this.autonomous}`);
};

const electric = new Electric('Tesla', 'X', 100000, 200, true);
electric.logDetails();

function Petrol(make, model, price, engineSize) {
  Car.call(this, make, model, price);
  this.engineSize = engineSize;
}

Petrol.prototype = Object.create(Car.prototype);
Petrol.prototype.constructor = Petrol;

Petrol.prototype.logDetails = function() {
  Car.prototype.logDetails.call(this);
  console.log(`The cars engine size is ${this.engineSize} Litre.`);
};

const petrol = new Petrol('Ford', 'Fiesta', 15000, 1.5)
petrol.logDetails();

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
  logDetails() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}`);
  }
}

class Electric extends Car {
  constructor(make, model, price, range, autonomous) {
    super(make, model, price);
    this.range = range;
    this.autonomous = autonomous;
  }
  logDetails() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}. The distance the car can travel is ${this.range} miles. The car is autonomous: ${this.autonomous}`);
  }
}

const electric = new Electric('Tesla', 'X', 100000, 200, true);
electric.logDetails();

class Petrol extends Car {
  constructor(make, model, price, engineSize) {
    super(make, model, price);
    this.engineSize = engineSize;
  }
  logDetails() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}. The cars engine size is ${this.engineSize} Litre.`);
  }
}

const petrol = new Petrol('Ford', 'Fiesta', 15000, 1.5)
petrol.logDetails();

// ----------------------------------
// Prototypal model for inheritance
// ----------------------------------

const Car = {
  make: 'make',
  model: 'model',
  price: 'price',
  constructor: function(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
  },
  logDetails: function() {
    console.log(`The make of this car is ${this.make} with the model being ${this.model}. The price of this car is £${this.price}`);
  }
};

const Electric = Object.create(Car);
Electric.range = ''
