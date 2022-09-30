//cria TAGS
function creatTag (tags, classe, parents){
  const parent = document.querySelector(parents);
  const tag = document.createElement(tags);
  tag.className = classe;
  // console.log(tag);
  parent.appendChild(tag);
}
creatTag('h1', 'title', 'body');
creatTag('main', 'main-content', 'body');
creatTag('section', 'center-content', '.main-content');
creatTag('p', 'paragraf1-cent-cont', '.center-content');
creatTag('section', 'left-content', '.main-content');
creatTag('section', 'right-content', '.main-content');
creatTag('img', 'small-image', '.left-content');
creatTag('ul', 'u-lista-numeros', '.right-content');
creatTag('h3', 'description', '.main-content');
creatTag('h3', 'description', '.main-content');
creatTag('h3', 'description', '.main-content');




//criando a <ul>
function criaUl (parents, listItens){
  const parent = document.querySelector(parents);
  for(let i = 0; i < listItens.length; i+= 1){
    let valorLi = listItens[i];

    let criaLi = document.createElement('li');
    criaLi.innerText = valorLi;
    parent.appendChild(criaLi);
  }
}
criaUl('.u-lista-numeros', ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 9, 'dez']);

//ADD textos
function addText (parents, text){
  const parent = document.querySelector(parents);
  parent.innerText = text;
}
addText('h1', 'Exercício - JavaScript DOM');
addText('.paragraf1-cent-cont', 'Testando o DOM');

//ADD imagem
// const acess = document.querySelector('.left-content');
// dpois acessar o smal-imag pelo firstChild
document.querySelector('.small-image').src = 'https://picsum.photos/200';;

//remover tags
function removeTag(parents, tags){
let parent = document.querySelector(parents);
let tag = document.querySelector(tags);
parent.removeChild(tag);
}
// removeTag('.main-content', '.left-content');
let remove = document.querySelector('.u-lista-numeros');
let removLi = document.querySelectorAll('.u-lista-numeros li');
for(let iR = 0; iR < removLi.length; iR += 1){
  let compara =removLi[iR];
  if(compara.innerText.includes('9') || compara.innerText.includes('dez')){
    remove.removeChild(compara);
  }
  
}


const editElement = document.querySelector('main');
editElement.children[2].style.marginRight = 'auto';
editElement.children[0].style.background = 'green';
