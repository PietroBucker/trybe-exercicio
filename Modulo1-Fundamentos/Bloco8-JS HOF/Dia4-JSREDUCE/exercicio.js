const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// exercicio 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  });
}

// console.log(flatten());


// exercicio 2
const names = () => {
return books.reduce((acc, curr) => {
  return `${acc} ${curr.name},`;
},'')
}
// console.log(names());

const expectedResult = 43;

function averageAge() {
  return books.map((book) => {
    return book.releaseYear - book.author.birthYear;}).reduce((acc, curr) => (acc + curr))/books.length;
}
// console.log(averageAge());

const bigName = () => {
  return books.reduce((acc, curr) => {
    return acc.name.length > curr.name.length ? acc : curr; 
  })
}
// console.log(bigName());

// exercicio 3

const nomes = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let result = 0
    nomes.forEach((nome) => {
    const letras = nome.split('');
    // console.log(letras);
    result += letras.reduce((acc, curr) => {
     return curr.toLowerCase() === 'a' ? acc + 1 : acc
    }, 0)
  })
  return result;
}
// console.log(containsA());
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const media = () => {
  const medias = grades.map((grade,) => {
    return grade.reduce((acc, curr) => acc + curr)/grade.length;
  })
  return students.map((student, ind) => {
    return {
      name: student,
      average: medias[ind]
    }
  })
}
console.log(media());
// 