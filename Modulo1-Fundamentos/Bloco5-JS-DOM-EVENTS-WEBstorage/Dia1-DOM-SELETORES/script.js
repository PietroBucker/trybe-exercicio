const test = document.getElementsByTagName('body');
test[0].style.textAlign = 'center';
test[0].style.margin = '0';
test[0].style.background = '#EBC79E'
test[0].style.width = '100vw';
test[0].style.height = '100vh'
//TITULO
function titulo(title){
  title.style.textAlign = 'center';
  title.style.background = '#70DB93';
  title.style.padding = '10px 0 10px 0';
  title.style.fontSize = '30px';
  title.style.margin = '0 0 50px 0';
}
titulo(document.getElementById('title'));

//TABELAS
function tabela(tabela, backColor){
  tabela[0].style.background = '#FF99FF';
  tabela[0].style.width = '300px';
  tabela[0].style.height = '400px';
  tabela[0].style.display = 'inline-block';
  tabela[0].style.textAlign = 'center';
}
tabela(document.getElementsByClassName('emergency-tasks', '#FF99FF'));
tabela(document.getElementsByClassName('no-emergency-tasks', '#DB7093'));

//TABELA URGENTE h3
document.querySelectorAll('.emergency-tasks h3')[0].style.margin = '5px 0 40% 0';
document.querySelectorAll('.emergency-tasks h3')[1].style.margin = '5px 0 40% 0';
document.querySelectorAll('.emergency-tasks h3')[0].style.background = '#FF1CAE';
document.querySelectorAll('.emergency-tasks h3')[1].style.background = '#FF1CAE';
//TABELA NAO URGENTE h3
document.querySelectorAll('.no-emergency-tasks h3')[0].style.margin = '5px 0 40% 0';
document.querySelectorAll('.no-emergency-tasks h3')[1].style.margin = '5px 0 40% 0';
document.querySelectorAll('.no-emergency-tasks h3')[0].style.background = 'black';
document.querySelectorAll('.no-emergency-tasks h3')[1].style.background = 'black';
//RODAPE
const rodape = document.querySelector('footer');
rodape.style.background = '#2F4F2F';
rodape.style.margin = '1% 0 0 0';
rodape.style.padding = '5px';
