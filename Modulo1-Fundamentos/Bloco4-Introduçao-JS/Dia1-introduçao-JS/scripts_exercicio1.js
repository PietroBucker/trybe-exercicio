// -----------parte 1------------
const a = 10;
const b = 5;
let adicao = a + b;
let subtr = a - b;
let multp = a * b;
let divi = a / b;
let mod = a % b;
console.log(adicao, subtr, multp, divi, mod);

// ---------part 2 --------------
// 2.1
const c = 15;

if(a > b && a > c){
  console.log(a + " é o maior numero");
}
else if(b > a && b > c){
  console.log(b + " é o maior numero");
}
else{
  console.log(c + " é o maior numereo");
}

// 2.2

const num = -1;

if(num > 0){
  console.log('positive');
}
else if(num < 0){
  console.log('negative');
}
else{
  console.log('zero');
}

// 2.3
const angA = 90;
const angB = 45;
const angC = -45;

const triAng = (angA + angB + angC);
const negativeAng = (angA < 0 || angB < 0 || angC < 0);

if(!negativeAng){
  if(triAng == 180){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
else{
  console.log('ERRO');
}

