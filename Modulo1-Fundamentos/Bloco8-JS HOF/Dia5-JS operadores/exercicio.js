// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
// });

//.............. EXERCICIO 2 ............
// const sum = (...param) => {
//   return param.reduce((acc, curr) => {
//     return acc + curr;
//   })
// }

// const sum = (...param) => {
//   return param.forEach((para) => {
//    console.log(para.reduce((acc, curr) => acc + curr))
//   })
  
// }

// console.log(sum([4, 5, 6]));

//------------------ exercicio 3 -----------------------

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };
// // name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade
// // complete a assinatura da função abaixo
// const personLikes = ({name, age, likes, nationality}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// // <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// // Retornos esperados:
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// ----------------Exercicio 4 ---------------
// const peoples = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
//     // bornIn: nascido em
// ];

// // escreva filterPeople abaixo
// const filterPeople = () => {
  
//   return peoples.filter(({name, bornIn, nationality}) => {
//      return bornIn > 2000;
//   })
// }
// console.log(filterPeople(peoples));
// // filterPeople(peoples)

// --------Exercicio 5

// const myList = [5, 2, 3];
// const swap = ([a, b, c]) => [c, a, b];
// swap(myList)

// ----------exercicio 6 ---------------
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
// const toObject = ([a, b, c]) => {
//   return {
//     nome: a,
//     modelo: b,
//     ano: c,
//   }
// }
// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(palio));

// ---------- exercicio 7-------------
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
     // measurementUnit: unidade de medida
];

// escreva shipLength abaixo
// const shipLength = (arr) => {
//   return arr.map(({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`);
// }
const shipLength = (arr) => {
  return arr.forEach(({name, length, measurementUnit}) => console.log(`${name} is ${length} ${measurementUnit} long`));
}

// retorno esperado
// console.log(shipLength(ships));
// shipLength(ships);

// ------------Exercicio 8--------

// const greet = (nome, greeting = 'Hi') => {
//   return `${greeting} ${nome}`;
// }
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// --------Exercicio 9 --------------

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const {spring, summer, autumn, winter} = yearSeasons
spring.unshift(winter.pop());
spring.unshift(winter.pop());
console.log([...spring, ...summer, ...autumn, ...winter]);
// yearSeasons: estações do ano.