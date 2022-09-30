function calcRomanos(numeros){
  const romano = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL:40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM:900,
    M:1000
  }
  console.log('test');
  const ordenaRomano = numeros.toUpperCase(numeros.split(''));
  console.log(romano['I']);
  let convertNumber = 0;
  let getNumber= [];
  for(let i = 0 ; i < ordenaRomano.length; i +=1){
    for(let jI in romano){
      console.log(jI);
      if(ordenaRomano[i] === jI){
       convertNumber = romano[jI];
        getNumber.push(convertNumber);
      }
    }

  }
  let somaNumber = 0;
  let recebeSoma = 0;
  console.log(getNumber);    
  for(let i = 0; i < getNumber.length; i += 1){
       if(getNumber[i] < getNumber[i + 1]){
      somaNumber = Math.abs(getNumber[i] - getNumber[i+1]);
      getNumber.splice(0,2,0)
      console.log(getNumber);
      recebeSoma += somaNumber;
    }
    else{
      recebeSoma += getNumber[i];
      
    }
  } 
   
   return recebeSoma; 
    
   
}
console.log(calcRomanos('xxx'));
