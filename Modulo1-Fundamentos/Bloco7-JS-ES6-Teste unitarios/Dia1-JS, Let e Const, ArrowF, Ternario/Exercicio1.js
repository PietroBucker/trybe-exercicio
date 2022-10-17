// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(false);

// -------- parte 2 ----------

// const oddsAndEvens = [13, 3, 4, 10, 7, 2, 2];

// const sortOddsAndEvens = (param) => param.sort(funct = (a, b) => (a - b));
// console.log(sortOddsAndEvens(oddsAndEvens));

// ..............................................sem usar sort...................................

// let oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens2 = (param) => {
// let aux = 0; 
//   for(let i = 0; i < param.length; i += 1){
//     for(let j = 0; j < param.length; j += 1){ 
//       if(param[i] < param[j]){
//         aux = param[j];
//         param[j] = param[i];
//         param[i] = aux;
//       }
//     }
//   }

//   return param;
// }
// console.log(sortOddsAndEvens2(oddsAndEvens2));