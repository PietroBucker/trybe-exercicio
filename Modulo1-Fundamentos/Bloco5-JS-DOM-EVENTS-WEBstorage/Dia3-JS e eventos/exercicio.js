function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// parte 1

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// const weekDayContainer = document.querySelector('.week-days-container');
const weekDaysList = document.querySelector("#days");
function addDayList() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let weekDayUl = document.createElement("li");
    weekDayUl.className = "day";
    friday(decemberDaysList[index], weekDayUl);
    holiday(decemberDaysList[index], weekDayUl);
    weekDayUl.innerText = decemberDaysList[index];
    weekDaysList.appendChild(weekDayUl);
  }
}

function holiday(day, li) {
  if (day === 24 || day === 25 || day === 31) {
    li.className += " holiday";
  }
}
function friday(day, li) {
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    li.className += " friday";
  }
}
addDayList();
function criaButton() {
  const buttonContainer = document.querySelector(".buttons-container");
  const buttonFeriados = document.createElement("button");
  buttonFeriados.className = "btn-holiday";
  buttonFeriados.innerText = "Feriados";
  buttonContainer.appendChild(buttonFeriados);
}
function criaButtonFriday() {
  const buttonContainer = document.querySelector(".buttons-container");
  const buttonFeriados = document.createElement("button");
  buttonFeriados.id = "btn-friday";
  buttonFeriados.innerText = "Sexta-Feira";
  buttonContainer.appendChild(buttonFeriados);
}
criaButtonFriday();
criaButton();

function setColorferiados() {
  const contChild = weekDaysList.children;
  console.log(contChild.length);
  for (let i = 0; i < contChild.length; i += 1) {
    let teste = weekDaysList.children[i].className;
    let teste2 = teste.slice(-7);
    if (
      teste2 === "holiday" &&
      weekDaysList.children[i].style.backgroundColor === ""
    ) {
      weekDaysList.children[i].style.backgroundColor = "red";
    } else {
      weekDaysList.children[i].style.backgroundColor = "";
    }
  }
}


const sextas = [4, 11, 18, 25];
const fridays = document.getElementsByClassName("friday");
const frase  = 'sextou'

function setTextFriday() {
 
  
  for (let i = 0; i < sextas.length; i += 1) {
    if (fridays[i].innerHTML !== frase){
      fridays[i].innerHTML = frase;
    } 
    else{
      fridays[i].innerHTML = sextas[i];
    }
  }
}

const btn = document.querySelector(".btn-holiday");
const btnFriday = document.querySelector("#btn-friday");


btn.addEventListener("click", setColorferiados);


btnFriday.addEventListener("click", setTextFriday);


function zoomIn(){
  const element = event.target;
  element.style.fontSize = "30px"
  console.log(element);
}
weekDaysList.addEventListener('mouseover', zoomIn)

function zoomOut(){
  const element = event.target;
  element.style.fontSize = "20px"
  console.log(element);
}
weekDaysList.addEventListener('mouseout', zoomOut)

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
}
newTaskSpan('projeto');
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}
newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
      console.log(selectedTask);
    console.log(selectedTask.length);
    } else {
      event.target.className = 'task';
      console.log(selectedTask);
    console.log(selectedTask.length);
    }
  });
}
setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}
setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();

