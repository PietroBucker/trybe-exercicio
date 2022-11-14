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


const keys = Object.keys(allLessons);
const values = Object.values(allLessons.lesson1);

console.log(keys);
console.log(values);

function teste (obj, num) {
  console.log(Object.values(obj)[num])
  
}
teste(lesson2, 0);

console.log('------------------------------')

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqueal = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqueal = true;
  }
  return isEqueal;
}
console.log(verifyPair(lesson1, 'materia', 'Matemátia'));