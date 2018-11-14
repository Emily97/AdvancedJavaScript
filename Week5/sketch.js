/* part one
const names = ['John', 'Joe', 'Mary'];
const check = (name) => name[0] === 'J';
console.log(names.some(check));
*/

/* part two
 const names = ['John', 'Joe', 'Mary'];
 const reducer = (accum, element) => {
   accum += element.length;
   return accum;
 }
 const lengthOfNames = names.reduce(reducer, 0);
 console.log(lengthOfNames);
*/

/*
const words = ['flabbergasted', 'outrageous','crazy','absurd'];

const reducer = words.reduce((total, num) => {
  if(num.length > 6){
    total += num.length;
  }
  return total;
},0);

console.log(reducer);
*/
