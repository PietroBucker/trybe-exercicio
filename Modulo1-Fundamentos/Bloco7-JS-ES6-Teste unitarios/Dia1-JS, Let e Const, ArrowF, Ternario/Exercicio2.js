
// const factorial = n => {
//   let result = 1;
//   for(let i = n; i > 0; i -= 1){
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(0));

const factor = (n) => (n > 0) ? n * factor(n - 1) : 1;
console.log(factor(5));

//..........parte 2..............