// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

window.onload = function(){

let body = document.querySelector('body')
let inputBg = document.querySelector('#input-background');
let inputFc = document.querySelector('#input-font-color');
let inputFs = document.querySelector('#input-font-size');
let paragraph = document.querySelector('main')
let inputFf = document.querySelector('#input-font-family') 
let inputLs = document.querySelector('#input-line-space') 
 
//troca cor do background
function backgroundColor(){
  let phraseText = inputBg.value;
  let bgColor = body.style.background = phraseText;
  localStorage.setItem('bgColor', bgColor);
}
inputBg.addEventListener('change', backgroundColor);

function setLocalStorageBGColor(){
  let getBgColor = localStorage.getItem('bgColor');
  body.style.background = getBgColor;
  
}
setLocalStorageBGColor();

//troca cor da font

function textColor(){
  let phraseText = inputFc.value;
  let fontColor = paragraph.style.color = phraseText;
  localStorage.setItem('fontColor', fontColor )
}
inputFc.addEventListener('change', textColor);
 
function setTextColorStorage(){ 
  let getFc = localStorage.getItem('fontColor');
  paragraph.style.color = getFc;
}
setTextColorStorage()

// tamanho da fonte
function fontsSize(){
  let phraseText  = inputFs.value;
  let fontSize = paragraph.style.fontSize = phraseText + 'px';
  localStorage.setItem('fontSize', fontSize);
}
inputFs.addEventListener('change', fontsSize);

function setFontSizeStorage(){
  let getFs = localStorage.getItem('fontSize');
  paragraph.style.fontSize = getFs;
}
setFontSizeStorage()

//tipo dee fonte
function fontsFamily(){
  let phraseText  = inputFf.value;
  let fontsFamily = paragraph.style.fontFamily = phraseText;
  localStorage.setItem('fontFamily', fontsFamily);
}
inputFf.addEventListener('change', fontsFamily);

function setFontFamilyStorage(){
  let getFf = localStorage.getItem('fontFamily');
  paragraph.style.fontFamily = getFf;
}
setFontFamilyStorage();

//espaçamento do texto.
function linesSpace(){
  let phraseText = inputLs.value;
  let lineSpace = paragraph.style.lineHeight = phraseText +'px';
  localStorage.setItem('lineSpace', lineSpace);
}
inputLs.addEventListener('change', linesSpace);

function setLineSpaceStorage(){
  let getLs = localStorage.getItem('lineSpace');
  paragraph.style.lineHeight = getLs;
}
setLineSpaceStorage()
}

