// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arrMaior) {
  let numMaior = Math.max(...arrMaior);
  let count = 0;
  for (let ind in arrMaior) {
    if (numMaior === arrMaior[ind]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let ind = 0; ind < array.length; ind += 1) {
    if (array[ind] % 3 === 0 && array[ind] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[ind] % 5 === 0) {
      result.push('buzz');
    } else if (array[ind] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(cripto) {
  let convert = cripto.split('');
  for (let ind = 0; ind < cripto.length; ind += 1) {
    switch (convert[ind]) {
    case 'a':
      convert[ind] = '1'; break;
    case 'e':
      convert[ind] = '2'; break;
    case 'i':
      convert[ind] = '3'; break;
    case 'o':
      convert[ind] = '4'; break;
    case 'u':
      convert[ind] = '5'; break;
    default: break;
    }
  }
  return convert.join('');
}

function decode(decripto) {
  let convert = decripto.split('');
  for (let ind = 0; ind < decripto.length; ind += 1) {
    switch (convert[ind]) {
    case '1':
      convert[ind] = 'a'; break;
    case '2':
      convert[ind] = 'e'; break;
    case '3':
      convert[ind] = 'i'; break;
    case '4':
      convert[ind] = 'o'; break;
    case '5':
      convert[ind] = 'u'; break;
    default: break;
    }
  }
  return convert.join('');
}

// Desafio 10
function techList(list, nome) {
  let lista = [];
  list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let ind = 0; ind < list.length; ind += 1) {
    lista.push({
      tech: list[ind],
      name: nome,
    });
  }

  return lista;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'lucas'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
