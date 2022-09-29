function calcRomanos(numeros){
  const romano = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL:40,
    L: 50
  }
  console.log('test');
  const ordenaRomano = numeros.split('');
  console.log(ordenaRomano);
  for(let ind in romano){
    console.log(romano[ind]);
  }
}
console.log(calcRomanos('XLIV'));