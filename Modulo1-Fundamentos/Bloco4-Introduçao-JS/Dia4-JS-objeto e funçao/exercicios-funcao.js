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

  //Exercicio-4 quantidade de caracteres.
  function numberOfCaracteres(caracteres){
  let aux = '';
  let nome = '';  
    for(let index = 0 ; index < caracteres.length ; index += 1){
      aux = caracteres[index];
      if(aux.length > nome.length){
        nome = caracteres[index];
      }
    } 
    return nome;
  }
  //console.log(numberOfCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

  //Exercicio-5 numero repitido
  function repetido(numebers){
  let numero = {}; 
  let maior = 0;
    for(let index = 0; index < numebers.length; index += 1){
      let aux = numebers[index];
      let cont = 0;
        for(let jIndex = 0; jIndex < numebers.length; jIndex += 1){
          if(aux === numebers[jIndex]){
            cont += 1;
          }
        }
        numero[aux] = cont;
    }
    
    return numero;
  }
  console.log(repetido([2, 3, 2, 5, 8, 2, 3]));