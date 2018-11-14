// const isGreaterThan = function(numberOne, numberTwo) {
//   if(numberOne > numberTwo) {
//     return true;
//   }else{
//     return false;
//   }
// }

// const isGreaterThan = (numberOne, numberTwo) => numberOne > numberTwo;
// console.log(isGreaterThan(5,4));

// function hypotenuse(a,b) {
//   function square(x) {
//     return x * x;
//   }
//   return Math.sqrt(square(a) + square(b));
// }
// console.log(hypotenuse(4,5));
const hypotenuse = (a,b) => {
  const square = x => x * x;
  return Math.sqrt(square(a) + square(b));
};
console.log(hypotenuse(4,5));
