// Desafio 11
function generatePhoneNumber(number) {
  let cont = 0;
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let ind = 0; ind < number.length; ind += 1) {
    let repitido = number[ind];
    for (let jind = 0; jind < number.length; jind += 1) {
      if (repitido === number[jind]) {
        cont += 1;
      } if (cont >= 3 || number[ind] < 0 || number[ind] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } cont = 0;
  }
  number.splice(7, 0, '-');
  number.splice(2, 0, ') ');
  number.splice(0, 0, '(');
  return number.join('');
}
// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  if (ladoA < ladoB + ladoC && ladoA > Math.abs(ladoB - ladoC)) {
    return true;
  } if (ladoB < ladoA + ladoC && ladoB > Math.abs(ladoA - ladoC)) {
    return true;
  } if (ladoC < ladoA + ladoB && ladoC > Math.abs(ladoA - ladoB)) {
    return true;
  }
  return false;
}
// Desafio 13
function hydrate(str) {
  let result = str.split(' ');
  let sum = 0;
  for (let ind = 0; ind < result.length; ind += 1) {
    if (result[ind] >= 0) {
      sum += Number(result[ind]);
    }
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
