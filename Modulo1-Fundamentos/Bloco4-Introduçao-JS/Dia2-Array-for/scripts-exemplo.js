let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let letter of names[1]){
  console.log(letter);
}
// ------exemplo 2--------

function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
  console.log(d2);
}
