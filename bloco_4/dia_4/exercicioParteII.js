// 1 - Palindromo
let resultado;
function verificaPalindrome(word){
    for (let index = 0; index <= Math.ceil(word.length/2); index++){
        if(word[index] !== word[word.length - index -1]){
            resultado = false;
            break;
        }
        else{
            resultado = true;
        }
    }
    return resultado;
}

// 2 - O índice do maior número de um array
let maior = 0;
function valorMaior(array){
    for (let index = 0; index < array.length; index++){
        if(array[index] > maior){
            maior = array[index];
            resultado = index;
        }
    }
    return resultado;
}

// 3 - O índice do menor número de um array

let menor;
function valorMenor(array){
    menor = array[0]
    for (let index = 1; index < array.length; index++){
        if(array[index] < menor){
            menoor = array[index];
            resultado = index;
        }
    }
    return resultado;
}

// 4 - A maior palavra

function palavraMaior(array){
    for (let index = 0; index < array.length; index++){
        if(array[index].length > maior){
            maior = array[index].length ;
            resultado = array[index];
        }
    }
    return resultado;
}

// 5 - O número que mais se repete
// fazendo pelo for/in como resolvido no gabarito
let cont;
let cont_maior =0;
function valorRepet(array){
    for (let index in array){
        valor_1 = array[index];
        cont = 0;
        for(let index_1 in array){
            if(array[index_1] == valor_1){
                cont+= 1;
            }
        }
        if(cont > cont_maior){
        resultado = valor_1
        cont_maior = cont;  
        }
    }
    return resultado;
}

// 6 - N e somatória
let soma = 0;
function valorSoma(N){
    for (let index = 0; index <= N; index++){
        soma += index;
    }
    return soma;
}

// 7 - Qual o final da palavra?

function verificaFimPalavra(stringWord, stringEnding){
    return stringEnding == stringWord.substr(stringWord.length - 2);
}

// Testando as funções:

console.log(valorRepet([2, 3, 2, 5, 8, 2, 3]));
