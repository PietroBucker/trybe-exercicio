const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTrunoLesson2 (param, prop, turno) {
  param[prop] = turno;
  return lesson2;
}
console.log(addTrunoLesson2(lesson2, 'truno', 'noite'));

// const list = (param) => {
  
//   return Object.keys(param)
// }
// console.log(list(lesson1));

// function tamnhoObj (param) {
//   return list(param).length;
// }
// console.log(tamnhoObj(lesson3));

// const listValues = (param) => {
  
//   return Object.values(param)
// }
// console.log(listValues(lesson1));

const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

const numberOfStudents = () => {
  let sum = 0;
  for (const key in allLessons) {
    sum += allLessons[key].numeroEstudantes
  }
  return sum;
}
console.log(numberOfStudents())

function teste (obj, num) {
  console.log(Object.values(obj)[num])
  
}
teste(lesson2, 0);


const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqueal = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqueal = true;
  }
  return isEqueal;
}
console.log(verifyPair(lesson1, 'materia', 'Matemátia'));

console.log('------------------------------')

const numberOfStudentsMatematic = (obj, name) => {
  let allLesson = [];
  let allStudents = 0;
  for (const key in obj) {
    if (obj[key].materia === 'Matemática') {
      allStudents += obj[key].numeroEstudantes;
      allLesson.push(obj[key].materia);
    }
  }
  return {materia: allLesson, alunos: allStudents};
}

function getInfo (allLessons, name) {
  const obj = {
    professor: name,
  }
  Object.assign(obj, numberOfStudentsMatematic(allLessons, name))
  return obj;
}
console.log(getInfo(allLessons, 'Maria Clara'));