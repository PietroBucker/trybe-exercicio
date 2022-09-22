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
const custo = 10;
const venda = 20;
const imp =0.2;
const lucro = (venda - (custo*1.2))*1000;

if(custo <= 0 || venda <= 0 || imp <= 0){
  console.log('ERRO');
}
else{
  console.log(lucro.toFixed(2));
}

// ----------parte 5-------------
const sal = 3000;
let salBruto = 0;
let salLiq = 0;
// --------->INSS<--------------
if(sal <= 1557.94){
  salBruto = sal - (sal * 0.08);
  console.log(salBruto);
}
else if(sal <= 2594.92){
  salBruto = sal - (sal * 0.09);
  console.log(salBruto);
}
else if(sal <= 5189.82){
  salBruto = sal - (sal * 0.11);
  console.log(salBruto);
}
else{
  salBruto = sal - (sal - 570.88);
  console.log(salBruto);
}
// ------>IRRF<-----------
if(salBruto <= 1903.98){
  console.log(salBruto);
}
else if(salBruto <= 2826.65){
  salLiq = salBruto - ((salBruto * 0.075) - 142.80);
  console.log(salLiq);
}
else if(salBruto <= 3751.05){
  salLiq = salBruto - ((salBruto * 0.15) - 354.80);
  console.log(salLiq);
}
else if(salBruto <= 4664.68){
  salLiq = salBruto - ((salBruto * 0.225) - 636.13);
  console.log(salLiq);
}
else{
  salLiq = salBruto - ((salBruto * 0.275) - 869.36);
  console.log(salLiq);
}