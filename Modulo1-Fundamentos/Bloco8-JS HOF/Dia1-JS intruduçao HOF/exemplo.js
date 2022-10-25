// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }

// const initialSum = sumFixAmount(15)
// console.log(initialSum(5));
// --------------------------------------------
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(6, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });
// ---------------------------------------------

const wakeUp = () => 'acordando!!';
const coffTime = () => 'Bora toma cafe!!'
const sleep = () => 'Partiu dormir!!'
const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(coffTime));
console.log(doingThings(sleep));