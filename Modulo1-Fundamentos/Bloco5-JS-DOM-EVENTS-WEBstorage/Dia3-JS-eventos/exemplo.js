const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// firstLi.addEventListener('click', function(){
//   firstLi.className = '';
// })

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let uList = document.querySelector('.container');
let li = document.querySelectorAll('li')
uList.addEventListener('click', function(){
let classTech = event.target.className;
let idLi = document.getElementById(event.target.id);
  if(classTech === 'tech'){
    idLi.className = '';
  }
  if(classTech === ''){
    firstLi.className = ''
    secondLi.className = ''
    thirdLi.className = ''
    idLi.className = 'tech';
    
    
  }
})
input.placeholder = 'altera tecnologia';
console.log(uList.TEXT_NODE.inn);
// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('change', function(){
  if(firstLi.className === '' && secondLi.className === '' && thirdLi.className === ''){
    alert('Selecione uma opçao');
  }
  let textLi = document.querySelector('.tech');
  let texto = input.value;
  textLi.innerHTML = texto;
  
  // if(uList.children.className === ''){
  //   uList.childNodes.innerText = 'ttestet'
  // }
  });
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?


myWebpage.addEventListener('dblclick', function(){
  
  window.location.href = 'https://github.com/PietroBucker';
})

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(){
  myWebpage.style.color = 'red';
})
myWebpage.addEventListener('mouseleave', function(){
  myWebpage.style.color = '#fff';
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

uList.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.