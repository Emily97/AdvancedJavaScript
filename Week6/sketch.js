//Define a constrcutor function that will create a Person object
function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log(`Hello my name is ${this.name}`);
};

//Create am object using the above constructor
let person1 = new Person('Marianna', 40);
person1.hello();
