const a = 5;
const b = 9;
const c =11;
const d = -1;
let peca;
let nota;

let valorCustoTotal;
let valorCusto;
let impostoSobreOCusto;
let lucro;
let valorVenda;



//Adição
console.log("Adição");
console.log(a+b);
//Subtração
console.log("Subtração");
console.log(a-b);
//Multiplicação
console.log("Multiplicação");
console.log(a*b);
//Divisão
console.log("Divisão");
console.log(a/b);
//Modulo - Resto da divisão (número inteiro)
console.log("Modulo");
console.log(a%b);

// O maior de dois números
if(a > b){
    console.log("O maior número é:");
    console.log(a)
}

else{
    console.log("O maior número é:");
    console.log(b)
}

// O maior de três números

if(a > b && a>c){
    console.log("O maior número é:");
    console.log(a)
}

else if(b>a && b>c){
    console.log("O maior número é:");
    console.log(b)
}

else {
    console.log("O maior número é:");
    console.log(c)
}


// Positivo ou Negativo

if(d < 0){
    console.log("Negativo");
}

else if(d > 0){
    console.log("Positivo");
    
}

else {
    console.log("Zero");
   
}

//Triângulos - Validação
switch(a+b+c){
    case 180:
        console.log("True");
        break;

    default:
        console.log("ERRO: False");

}

//Peças de Xadrez

peca = "RainhA"

switch(peca.toLowerCase()){
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;

    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;

    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;

    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;

    default:
        console.log("ERRO: Peça não encontrada");

}


// Conversão de notas

nota = 45;

if(nota >= 90 && nota<=100 ){
    console.log("Conterte em:A");
   
}
else if(nota >=80){
    console.log("Converte em:B");
  
}

else if(nota >=70){
    console.log("Converte em:C");
    
}

else if(nota >=60){
    console.log("Converte em:D");
  
}

else if(nota >=50){
    console.log("Converte em:E");

}

else if(nota <50){
    console.log("Converte em:F");
 
}

else{
    console.log("ERRO: Nota errada");   
}


// Par ?

console.log("Par?");   

console.log(a%2==0 || b%2==0 || c%2==0);
   


// Ímpar ?


if(a%2!=0 || b%2!=0 || c%2!=0){
    console.log("true");
   
}

else{
    console.log("false");
  
}

// Vendendo Mil Produtos

valorCusto = 50;
valorVenda = 90;

impostoSobreOCusto = valorCusto*(0.2);
valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal;

if(valorVenda < 0 || valorCusto < 0){
    console.log("ERRO: Valor errado");   
}

else{
    console.log(lucro*1000);   
}

// RENDA CALCULADA

// INSS

let valor =0;
let valor_liq=0;
let salario = 3000;

if(salario < 1556.94){
    valor= salario - salario*(0.08);
}

else if(salario >= 1556.95 && salario < 2594.93){
    valor= salario - salario*(0.09);
}

else if(salario >= 2594.93 && salario < 5189.83){
    valor= salario - salario*(0.11);
}

else{
    valor= salario - 570.88;  
}


// IR 

if(salario < 1903.99){
    valor_liq= valor;
}

else if(salario >= 1903.99 && salario < 2826.66){
    valor_liq= valor - (valor*(0.075) - 142.80);
}

else if(salario >= 2826.66 && salario < 3751.06){
    valor_liq= valor - (valor*(0.15) - 354.80);
}

else if(salario >= 3751.06 && salario < 4664.69){
    valor_liq= valor - (valor*(0.225) - 636.13);
}

else{
    valor_liq= valor - (valor*(0.275) - 869.36);  
}

console.log(valor_liq);