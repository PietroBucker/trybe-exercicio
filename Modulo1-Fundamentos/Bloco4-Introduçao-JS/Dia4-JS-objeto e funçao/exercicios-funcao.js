//exercicio-1 palindromo:
function palindromo(word){
// é possivel usando o for/in  
  let revers = word.split('').reverse().join('');
    //primeira tentativa funciona porem nao tao eficiente.
    // revers = revers.reverse();
    // revers = revers.join('');
  if(word === revers){
    return(true);
  }
  else{
    return(false);
  }
}
//console.log(palindromo('ama'));

//Exercicio-2 indice maior valor
function indexValMaior(value){
let cont = value[0];
let ind = 0;  
  for(let i in value){
    if(value[i] > cont){
      ind = i
      cont = value[i];
      
    }
  }
  return (ind);

}
//console.log(indexValMaior([1, 2, 9, 5, 6, 7]));

//Exercicio-3 indice menor valor
function indexValMenor(value){
  let cont = value[0];
  let ind = 0;  
    for(let i in value){
      if(value[i] < cont){
        ind = i
        cont = value[i];
        
      }
    }
    return (ind);
  
  }
  //console.log(indexValMenor([9, 2, 1, 5, 0, -7]));