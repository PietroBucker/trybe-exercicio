const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1--------------
// let maior = numbers
// for(let i = 1 ; i < maior.length ; i++){
//   for(let i2 = 0 ; i2 < i ; i2++){
//     if(maior[i] < maior[i2]){
//       let position = maior[i];
//           maior[i] = maior[i2];
//           maior[i2]= position;
//     }
//   }
// }
// console.log(maior);

// // 2----------------
// let menor = numbers
// for(let i = 1 ; i < menor.length ; i++){
//   for(let i2 = 0 ; i2 < i ; i2++){
//     if(menor[i] > menor[i2]){
//       let position = menor[i];
//           menor[i] = menor[i2];
//           menor[i2]= position;
//     }
//   }
// }
//console.log(menor);
// 3-----------------
let mult =[];
for(let i = 0 ; i < numbers.length ; i++){
  if((numbers.length - 1) == i){
    mult.push(numbers[i] * 2)
    console.log(mult);
    break;
  }
  mult.push(numbers[i]* numbers[i+1])
}
