/* part one
const person = {name: 'John', age: 25};
console.log(person);
person.name = 'Mark';
console.log(person.name);
*/

/* part two
const person = {name: 'John', age: 30};
const arr = ['name', 'age'];

for(let i = 0; i < 2; i++) {
  console.log(person[arr[i]]);
}
*/

const person = {name: 'John', age: 23, salary: 1000};

for(let n in person) {
  console.log(n);
  console.log(person[n]);
}
