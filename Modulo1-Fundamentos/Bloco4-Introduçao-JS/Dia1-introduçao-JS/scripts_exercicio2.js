// ---------parte 3------------
const xess = 'rei';


switch(xess.toUpperCase()){
  case "PEAO":
    console.log("1 casa a frente");
    break;
  case "BISPO":
    console.log("diagonais");
    break;   
  case "TORRE":
    console.log('linha reta menos diagonais');
    break; 
  case "CAVALO":
    console.log('para frente 2 e 1 para o lado');
    break;  
  case "RAINHA":
    console.log('linha reta em qualquer direçao');
    break;  
  case "REI":
    console.log('1 casa em qualqueer direçao');
    break;  
  default:
    console.log('Pessa invalida');
    
}
// -------partee 4----------------
const custo = 33;
const venda = 41;
const imp = 0.2;
const lucro = (venda - (custo + (custo*imp)))*1000;

if(custo <= 0 || venda <= 0 || imp <= 0){
  console.log('ERRO');
}
else{
  console.log(lucro.toFixed(2));
}


