const verifica = (arrayGabarito, answers) => {
  let cont = 0;
  for(let index = 0; index < arrayGabarito.length; index += 1){
    if(answers[index] === 'N.A'){
    }
    else if(answers[index] !== arrayGabarito[index]){
      cont -= 0.5;
    }
    else{
      cont += 1;
    }
  }
  return cont;
}

const isCorrect = (arrayGabarito, answers, verificaFun) => {
   const resultado =  verificaFun(arrayGabarito, answers);
   return resultado;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(isCorrect(rightAnswers, studentAnswers, verifica));

