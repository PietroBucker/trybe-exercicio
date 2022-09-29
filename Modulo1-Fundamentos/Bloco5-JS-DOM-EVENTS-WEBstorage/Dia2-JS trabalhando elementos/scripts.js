//cria TAGS
function creatTag (tags, classe, parents){
  const parent = document.querySelector(parents);
  const tag = document.createElement(tags);
  tag.className = classe;
  // console.log(tag);
  parent.appendChild(tag);
}
creatTag('h1', 'titulo', 'body');
creatTag('main', 'main-content', 'body');
creatTag('section', 'center-content', '.main-content');
creatTag('p', 'paragraf1-cent-cont', '.center-content');
creatTag('section', 'left-content', '.main-content');
creatTag('section', 'right-content', '.main-content');

//ADD textos
function addText (parents, text){
  const parent = document.querySelector(parents);
  parent.innerText = text;
}
addText('h1', 'Exercício - JavaScript DOM');
addText('.paragraf1-cent-cont', 'Testando o DOM');

//ADD imagem
// const acess = document.querySelector('.left-content');
const acess = document.querySelector('.main-content');
const imagen = document.createElement('img');
imagen.className = 'small-image';
imagen.src = 'https://picsum.photos/200';
acess.children[1].appendChild(imagen);

const lista = document.createElement('ul');
lista.className = 'u-lista-numeros';

acess.children[2].appendChild(lista);