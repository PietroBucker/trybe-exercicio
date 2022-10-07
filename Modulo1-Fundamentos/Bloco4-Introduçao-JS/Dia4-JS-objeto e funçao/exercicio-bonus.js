// function calcRomanos(numeros){
//   const romano = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL:40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM:900,
//     M:1000
//   }
//   console.log('test');
//   const ordenaRomano = numeros.toUpperCase(numeros.split(''));
//   console.log(romano['I']);
//   let convertNumber = 0;
//   let getNumber= [];
//   for(let i = 0 ; i < ordenaRomano.length; i +=1){
//     for(let jI in romano){
//       console.log(jI);
//       if(ordenaRomano[i] === jI){
//        convertNumber = romano[jI];
//         getNumber.push(convertNumber);
//       }
//     }

//   }
//   let somaNumber = 0;
//   let recebeSoma = 0;
//   console.log(getNumber);    
//   for(let i = 0; i < getNumber.length; i += 1){
//        if(getNumber[i] < getNumber[i + 1]){
//       somaNumber = Math.abs(getNumber[i] - getNumber[i+1]);
//       getNumber.splice(0,2,0)
//       console.log(getNumber);
//       recebeSoma += somaNumber;
//     }
//     else{
//       recebeSoma += getNumber[i];
      
//     }
//   } 
   
//    return recebeSoma; 
    
   
// }
// console.log(calcRomanos('xxx'));
//exercicico 2

function arratOfNumbers(vetor) {
  let arr = [];
  for(let j of vetor){
    for(let i = 0; i < j.length; i += 1){
      if(j[i]%2 == 0){
        arr.push(j[i]);
      }
    }
  }
return arr;
}
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// console.log(arratOfNumbers(vector));

function cestaFrutas(arr) {
  let obj = {};
  for(let ind in arr){
    let cont = 0;
    for (let compara of arr) {
      if(arr[ind] === compara){
        cont += 1;
        obj[arr[ind]] = cont;
      }
  }
}
  return obj;
}
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
// console.log(cestaFrutas(basket));

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
// for(let i = 0; i< 2; i+= 1){
//  console.log(moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome);
// }

let cont = 0;
for(let prop in moradores){
  for(let i = 0; i < moradores[prop].length; i += 1){
  console.log(moradores[prop][i].nome + ' ' + moradores[prop][i].sobrenome );
  }
}