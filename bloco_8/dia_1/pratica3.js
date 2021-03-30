const checarResposta = (gabarito) => (resposta) => resposta.toUpperCase() == gabarito.toUpperCase()? true : false;

// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

console.log(checarResposta(correctAnswer)(userAnswer));