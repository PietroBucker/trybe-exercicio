// // Exercicio 1:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('boas vindas ' + info.personagem);
// Exercicio 2:

info.recorrente = 'sim';
console.log(info);
// //Exercicio 3:

// for(let mostra in info){
//   console.log(mostra);
// }
// Exercicio 4:
// for(let mostra in info){
//   console.log(info[mostra]);
// }
//Exercicio 5:

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
// };
// for(let key in info, info2){
//   console.log(info[key] + ' e ' + info2[key]);
// }
//Exercicio 6:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('o livro favorito de ' + leitor.nome + ' é ' + leitor.livrosFavoritos[0].titulo );
//Exercicio 7:

leitor.livrosFavoritos.push( 
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
)
//console.log(leitor);

//Exercicio 8:
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length);