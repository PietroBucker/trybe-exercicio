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
      birthYear: 1930,
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
const pessoaAuora1947 = (birthYear) => {
return books.find((book) => book.author.birthYear === birthYear);
}
// console.log(pessoaAuora1947(1947));

const smallerName = () => {
  let bookName = books[0].name;
  const teste = books.forEach((book) => book.name.length <= bookName.length && (bookName = book.name));
  return bookName;
}
// console.log(smallerName());

const getNameBook = () => {
  return books.find((book) => book.name.length === 26);
}
// console.log(getNameBook());

function compareFn(a, b) {
return b.releaseYear - a.releaseYear;
}
const booksOrderDecree = () => {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
// console.log(booksOrderDecree());

const secOfBurn = () => {
  return books.every((book) => {
    
    if (book.author.birthYear > 1901 && book.author.birthYear < 2000) {
      return true;
    }
    return false;
  });

}
// console.log(secOfBurn());
const bookDec80 = () => {
  return books.some((book) => {
    
    if (book.releaseYear > 1980 && book.releaseYear < 1989) {
      return true;
    }
    return false;
  });
}
// console.log(bookDec80());
const sameDateBirth = () => {
    return books.every((book) => {
     return !books.some((bookSome) => {
        if(bookSome.author.birthYear === book.author.birthYear && bookSome.author.name !== book.author.name) {
          return true;
        }
        
      })
    })
  
}
console.log(sameDateBirth());