function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// parte 1

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

// const weekDayContainer = document.querySelector('.week-days-container');
const weekDaysList = document.querySelector('.week-days');
function addDayList (){
for(let index = 0 ; index < decemberDaysList.length; index += 1){
let weekDayUl = document.createElement('li')
weekDayUl.className = 'day';
holiday(decemberDaysList[index], weekDayUl);
friday(decemberDaysList[index], weekDayUl)
weekDayUl.innerText = decemberDaysList[index];



weekDaysList.appendChild(weekDayUl);
}
}
addDayList ()

function holiday(day, li) {
  if(day === 24 || day === 25 || day === 31){
    li.className = 'day holiday';
  }
}
function friday(day, li) {
  if(day === 4 || day === 11 || day === 18 || day === 25){
    li.className = 'day friday';
  }
}
function criaButton() {
  const buttonContainer = document.querySelector('.buttons-container');
  const buttonFeriados = document.createElement('button');
  buttonFeriados.className = 'btn-holiday';
  buttonFeriados.innerText = 'Feriados'
  buttonContainer.appendChild(buttonFeriados);
}
criaButton()