
const verifica = (number, sorteiaNumero) => number === sorteiaNumero ? true : false;

const sorteio = (number, verificaFun) => {
    const sorteiaNumero = Math.ceil(Math.random()*5);
    const simNao = verificaFun(number, sorteiaNumero) ? 'Parabéns você ganhou' : 'Tente novamente';
    return simNao;
}

console.log(sorteio(2, verifica));