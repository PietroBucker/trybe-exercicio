// const newEmployees = (gerEmail) => {
//   const employees = {
//     id1: gerEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: gerEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: gerEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const gerEmail = (nome) => {
//   const email = nome.toLowerCase().split().join('_');
//   return {nome, email:`${email}@betrybe.com`};
// }
// console.log(newEmployees(gerEmail));
// --------------------------------------------



// const loteria = () =>{
//   const sorteado = Math.floor(Math.random() * 5 + 1);
//   return sorteado;
// }

// const checkDeal = (num, loteria) => num === loteria() ? 'Parabens voce acerto' : 'Tente novamente';


// console.log(checkDeal(2, loteria));
// -----------------------------------------------------

const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const hoF = (solucao, respostas, compara ) => {
//   return `Resultado final é: ${compara(solucao, respostas)} pontos`;
  
// }

// const compara = (teste1, teste2) => {
//   let cont = 0;
//   for(let ind in teste1){
//     if (teste1[ind] === teste2[ind]) {
//       cont += 1
//     }
//     else if (teste2[ind] !== 'N.A') {
//       cont -= 0.5;
//     }
//   }
//   return cont;
// }
// console.log(hoF(RIGHT_ANSWERS, STUDENT_ANSWERS,  compara));
// -----------------------------------------------------------------


const compara2 = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
      return 1;
    }
    if (STUDENT_ANSWERS === 'N.A') {
      return 0;
    }
    else{
      return -0.5;
    }
  }
const hof = (RIGHT_ANSWERS, STUDENT_ANSWERS, action ) => {
  let cont = 0;
  for(let i = 0; i < RIGHT_ANSWERS.length; i += 1){
    const retornoCompara = action(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    cont += retornoCompara;
  }
  return cont;
}
  console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS,  compara2));