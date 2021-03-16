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

function DaysMonth(){

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
  };
};

DaysMonth();

// Exercício 2

function holidayButton(name){

  let button1 = document.createElement('button');

  button1.innerText = name;

  button1.id = 'btn-holiday';

  document.querySelector('.buttons-container').appendChild(button1);
};

holidayButton('Feriados');

// Exercício 3
function changeColorHolidays(){
  let buttonFeriados = document.querySelector('#btn-holiday');

  function changeBackground(){
    // console.log('aqui');
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
};

changeColorHolidays();

// Exercicio 4

function buttonFriday(name){ 

  let friday = document.createElement('button');

  friday.innerText = name;

  friday.id = 'btn-friday';

  document.querySelector('.buttons-container').appendChild(friday);
};

buttonFriday('Sexta-Feira');

// Exercício 5

function changeTextFridays(){

  let buttonFriday = document.querySelector('#btn-friday');
  let arrayFriday = [4,11,18,25];

  buttonFriday.addEventListener('click', function (){
    // console.log('aqui');
    let friday = document.querySelectorAll('.friday');
    for(let index = 0; index < friday.length; index++){
      if( friday[index].innerHTML !== 'SEXTOU, TRYBERS O/'){
        friday[index].innerHTML = 'SEXTOU, TRYBERS O/';
      }
      else{
        friday[index].innerHTML = arrayFriday[index];
      }
    }
  });
};

changeTextFridays();

// Exercício 6

let days = document.querySelector('#days');

function mouseOver(){
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  });
};

function mouseOut(){
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
};

mouseOver();
mouseOut();

//Exercício 7

function taskSpan(task){

  let stringTask = task;

  let spanTask = document.createElement('span');

  spanTask.innerHTML = stringTask;

  document.querySelector('.my-tasks').appendChild(spanTask);

};

taskSpan('conzinhar');

// Exercício 8

function taskDiv(color){

  let divTask = document.createElement('div');

  divTask.className = 'task';

  divTask.style.backgroundColor = color;

  document.querySelector('.my-tasks').appendChild(divTask);

};

taskDiv('green');

// Exercício 9

function taskClass(){

  let tasks = document.querySelector('.task');

  tasks.addEventListener('click', function (event){
    if(document.getElementsByClassName('task selected').length === 0){
      console.log('task selected');
      event.target.className = 'task selected';
      event.target.style.backgroundColor = 'red'
    }
    else{
      console.log('task');
      event.target.className = 'task';
      event.target.style.backgroundColor = 'green'
    } 
  });
};

taskClass();

// Exercício 10


function setDayColor() {
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    let selectedTask = document.getElementsByClassName('task selected');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
     
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
  
// Exercício 11
  
