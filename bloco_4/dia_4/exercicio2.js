
let valorCustoTotal;
let valorCusto;
let impostoSobreOCusto;
let lucro;
let valorVenda;



//Adição
function sum(a, b){   
    return "Adição=" + ' ' + (a + b);
}

//Subtração
function sub(a, b){   
    return "Subtração=" + ' ' + (a - b);
}

//Multiplicação
function multi(a, b){   
    return "Multiplicação=" + ' ' + (a*b);
}

//Divisão
function div(a, b){   
    return "Divisão=" + ' ' + (a/b);
}

//Modulo - Resto da divisão (número inteiro)
function modu(a, b){   
    return "Modulo=" + ' ' + (a%b);
}

// O maior de dois números
function qualMaior2(a, b){
    if(a > b){
        return "O maior número é:"+ " " + a;
       
    }
    
    else{
        return "O maior número é:" + " " + b;
    }
}

// O maior de três números
function qualMaior3(a, b, c){
    if(a > b && a>c){
        return "O maior número é:" + " " + a;
    }

    else if(b>a && b>c){
        return "O maior número é:" + " " + b;
    }

    else {
        return "O maior número é:" + " " + c;
    }
}

// Positivo ou Negativo
function positivoNegativo(d){
    if(d < 0){
        return "Negativo";
    }

    else if(d > 0){
        return "Positivo";
        
    }

    else {
        return "Zero";
    
    }
}


//Triângulos - Validação
function validacaoTrian(a, b, c){
    switch(a+b+c){
        case 180:
            return "True";
            break;

        default:
            return "ERRO: False";
    }
}

//Peças de Xadrez
function pecaXadrez(peca){
    switch(peca.toLowerCase()){
        case "rei":
            return "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.";
            break;
    
        case "rainha":
            return "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
            break;
        
        case "bispo":
            return "O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
            break;
    
        case "cavalo":
            return "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.";
            break;
    
        case "torre":
            return "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
            break;
    
        case "peão":
            return "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";
            break;
    
        default:
            return "ERRO: Peça não encontrada";
    
    }
}

// Conversão de notas
function convercaoNota(nota){
    if(nota >= 90 && nota<=100 ){
        return "Conterte em:A";
    
    }
    else if(nota >=80){
        return "Converte em:B";
    
    }

    else if(nota >=70){
        return "Converte em:C";
        
    }

    else if(nota >=60){
        return "Converte em:D";
    
    }

    else if(nota >=50){
        return "Converte em:E";

    }

    else if(nota <50){
        return "Converte em:F";
    
    }

    else{
        return "ERRO: Nota errada";   
    }
}

// Par ?  
function par(a, b, c){
    console.log(a%2==0 || b%2==0 || c%2==0);
}

// Ímpar ?
function impar(a, b, c){
    if(a%2!=0 || b%2!=0 || c%2!=0){
        return "true";
    
    }

    else{
        return "false";
    
    }
}
// Vendendo Mil Produtos
function lucroMilProdutos(valorCusto, valorVenda){
    impostoSobreOCusto = valorCusto*(0.2);
    valorCustoTotal = valorCusto + impostoSobreOCusto;
    lucro = valorVenda - valorCustoTotal;

    if(valorVenda < 0 || valorCusto < 0){
        return "ERRO: Valor errado";   
    }

    else{
        return lucro*1000;   
    }
}

// RENDA CALCULADA

let valor =0;
let valor_liq=0;

function rendaCalculada(salario){
    // INSS

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

    return valor_liq;
}

let resultado = lucroMilProdutos(30,50);
console.log(resultado);

