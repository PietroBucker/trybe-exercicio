let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1---------------
for(let number of numbers){
  console.log(number);
}
// 2--------------
let sum = 0;
for(let i = 0 ; i < numbers.length ; i++){
  sum = sum + numbers[i];
}
console.log('a soma é: ' + sum);
// 3--------------
let media = 0
for(let i = 0 ; i < numbers.length ; i++){
  media = media + numbers[i];
}
console.log('a media é: ' + (media / numbers.length));
//4----------------
if(media > 20){
  console.log('valor maior que 20');
}
else{
  console.log('valor menor ou igual a 20');
}
//5---------------
let maior = 0
for(let i = 0 ; i < numbers.length ; i++){
  if(numbers[i] > maior){
    maior = numbers[i];
  }
}
console.log('maior numero é: ' + maior)
//6---------------
let impar = 0;

for(let i = 0 ; i < numbers.length ; i++){
  if(numbers[i]%2 === 1 ){
    impar++;
  }
  else{
    console.log('nenhum impar encontrado');
  }
}
console.log("tem " + impar + " impares");
// 7-----------------
let menor = numbers[0];
for(let i = 0 ; i < numbers.length ; i++){
  if(numbers[i] < maior){
    maior = numbers[i];
  }
}
console.log('menor numero é: ' + maior)
//8 e 9-------------------
let arr = [];
let div = [];
for (let i = 1; i <= 25; i++) {
  arr.push(i);
  div.push(i/2);
}
console.log(arr);
console.log(div);
