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
const newArray = () => {
  return books.map((book) => console.log(book.name, book.genre, book.author.name));
}
// newArray();

const newArrObj = () => {
  return books.map((book) => {
    return {
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear
    }
  }).sort((a, b) => a.age - b.age);
}
// console.log(newArrObj());

const ficctionOrFantasy = () => {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
}
// console.log(ficctionOrFantasy());
// const ageBook = books.releaseYear - 2020;
const moreOf60Years = () => {
  return books.filter((book) => (2022 - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(moreOf60Years());

const orderNames = () => {
    return books.filter((bookFilter) => bookFilter.genre === 'Fantasia' || bookFilter.genre === 'Ficção Científica').
    map((book) => book.author.name).sort();
}
// console.log(orderNames());
const moreOf60YearsNames = () => {
  return books.filter((book) => (2022 - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear).map((book) => book.name);
}
// console.log(moreOf60YearsNames());
const returnName = () =>{
  return books.find((book) => book.author.name.startsWith('J. R. R.')).name;
}
// console.log(returnName());

const returnName2 = () =>{
  return books.find((book) => {
    return book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3}).name
}
console.log(returnName2());