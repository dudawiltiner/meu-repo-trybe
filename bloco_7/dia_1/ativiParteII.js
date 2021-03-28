// DE Forma recursiva usar novamente a função recebi a ajuda do gabarito

const factorial = number => number > 1 ? number * factorial(number - 1) : 1

// aplia-se um ternary oprator para a condição de chamada da função factorial.
console.log(factorial(4));

//exercício 2

const maiorPalavra = phrase => {
    let array = phrase.split(' ');
    let comprimento = 0;
    let palavra;

    for (let index = 0; index < array.length; index+=1) {
        if (array[index].length > comprimento) {
            comprimento = array[index].length;
            palavra = array[index];
        }
    }
    return palavra;
}

console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));

