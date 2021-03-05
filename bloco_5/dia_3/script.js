function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


for(let index = 0; index < dezDaysList.length; index++){
    let listDays = document.createElement('li');
    listDays.innerHTML = dezDaysList[index];
    listDays.className = 'day';
    if(dezDaysList[index] == 24 || dezDaysList[index] == 31){
      listDays.className = 'day holiday';
    }
    else if(dezDaysList[index] == 4 || dezDaysList[index] == 11 ||dezDaysList[index] == 18){
      listDays.className = 'day friday';
    }
    else if(dezDaysList[index] == 25){
      listDays.className = 'day holiday friday';
    }
    document.querySelector('#days').appendChild(listDays);
}

// Exercício 2

let button1 = document.createElement('button');

button1.innerText = 'Feriados';

button1.id = 'btn-holiday';

document.querySelector('.buttons-container').appendChild(button1);

// Exercício 3

let buttonFeriados = document.querySelector('#btn-holiday');

function changeBackground(){
  console.log('aqui');
  let holiday = document.querySelectorAll('.holiday');
  console.log(holiday);
  for(let index = 0; index < holiday.length; index++){
    if( holiday[index].style.backgroundColor === 'white'){
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
    else{
      holiday[index].style.backgroundColor = 'white';
    }
  }
}

buttonFeriados.addEventListener('click',changeBackground);

// Exercicio 4

let friday = document.createElement('button');

friday.innerText = 'Sexta-Feira';

friday.id = 'btn-friday';

document.querySelector('.buttons-container').appendChild(friday);