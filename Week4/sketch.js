/* Part one
const students = ['Neil', 'Anne', 'Roisin'];

function arrayProcessor_old(element, i){
  console.log(element.toUpperCase());
  console.log(`index is ${i}`)
}

students.forEach((student) => console.log(student.toUpperCase()));
*/
/* Part two
const books = ['Thinking in JS', 'JS Patterns', 'JS:The Good Parts', 'ES6 and Beyond'];

books.forEach((book) => console.log('I need to read ' + book));
*/

/* Part three
const marks = [40, 50, 50, 60];
// const passed = mark => mark >= 40;
const allPass = marks.every(mark => mark >= 40);
console.log(allPass ? 'Everyone passed': 'Someone failed :(');

// let allPass = false;
// for(let i = 0; i < marks.length; i++){
//   if(marks[i]<40){
//     allPass = false;
//     break;
//   }
// }
//
// console.log(allPass ? 'Everyone passed': 'Someone failed :(');
*/

/* part four
console.log([5,10,15,30].every(x => x % 5 === 0)); //true
console.log([6,10,15,30].every(x => x % 5 === 0)); //false
*/

/* part five
const marks = [20,30,37,45];
console.log(marks.some(num => num >= 40));
*/

/* part six
console.log(['Andrew', 'Mortimer', 'Alexandria'].some(x => x.length > 5)); //true
console.log(['Jo', 'Jill', 'Alex'].some(x => x.length > 5)); //false
*/

/* part seven
const prices = [200,200,125,100];
const vatOfPrice = prices.map(calcVat);
console.log(vatOfPrice);
function calcVat(price){
  const vat = .23;
  return price * vat;
}
*/

/* part eight
const names = ['Andrew', 'Jane', 'Sarah'];
const makeList = text => `<li>${text}</li>`;
const list = names.map(makeList);
console.log(list);
*/

/* part nine
const donut = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];
const formattedDonut = donut.map(text => text.charAt(0).toUpperCase() + text.substr(1));
console.log(formattedDonut);
*/

/* part ten
const prices = [100,202,220,220,334];
const filterFn = price => price < 250;
const filterPrices = prices.filter(filterFn);
console.log(filterPrices);
*/

/* part eleven
const posNeg =[1,-1,-2,3,5,-7];
const filterArr = posNeg.filter(pos => pos >= 0);
console.log(filterArr);
*/


const prices = [100,202,220,220,334];
const res = prices.reduce((totalPrice, value) => {
  console.log('total ' + totalPrice);
  console.log('value ' + value);
  return totalPrice += value;
});
console.log(res);
