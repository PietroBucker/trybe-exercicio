let num = 10;
let fat = 1;
for (let i = num; i >= 1; i--) {
  fat = fat * i;
}
console.log(fat);
// -------exercicio 2-----------
let word = 'pietro';
let revert = '';
for(let i = word.length - 1 ; i >= 0 ; i--){
  revert += word[i];
}
console.log(revert);
// ---------exercico 3------------

let array = ['java', 'javascript', 'python', 'html', 'css'];
let aux = '';
let maior = array[0].length;
let menor = array[0].length;
for(let i = 0 ; i < array.length ; i++){
  aux = array[i];
  if(aux.length > maior){
    maior = aux.length;
  }
  if(aux.length < menor){
    menor = aux.length;
  }
}
console.log(maior);
console.log(menor);

//------exercicio 4-------------
let numero = 1;
let cont = 0;
let arr =[];
for(let i = 1 ; i <= 50 ;i++){
  arr.push(i);
  
  if(numero % i == 0){
    cont++
  }
}
  if(cont == 2){
    console.log('e primo');
  }
  else{
    console.log('nao e primo');
  }
