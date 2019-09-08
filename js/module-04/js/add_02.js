/* eslint-disable no-restricted-syntax */
/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
  boris: 44,
};

/* Вариант 1 */

const keys = Object.keys(tasksCompleted);
let maxTask = 0;
let bestWorker = '';
let key;

for (key of keys) {
  if (tasksCompleted[key] > maxTask) {
    maxTask = tasksCompleted[key];
    bestWorker = key;
  }
}

console.log('Сотрудник, выполнивший больше всего задач - ', bestWorker);

/* Вариант 2 */

const getNameWithTheBestTasks = (obj) => {
  const keys2 = Object.keys(obj); // ['ann', 'david', ... ]
  let max = 0;
  let name = '';
  for (const key2 of keys2) {
    // ann        29   >  0  ?   ann  :  ''
    // david        35   >  29  ? david : ann
    name = obj[key2] > max ? key2 : name;
    max = obj[key2] > max ? obj[key2] : max;
  }
  return name;
};

console.log('Username with the best number of tasks is', getNameWithTheBestTasks(tasksCompleted));

/* Вариант 3 */

const getNameOfTheBestTasks = (obj) => {
  const keys3 = Object.entries(obj);
  let maxNum = 0;
  let bestEmployee = '';
  for (const key3 of keys3) {
    if (key3[1] > maxNum) {
      maxNum = key3[1];
      bestEmployee = key3[0];
    }
  }
  return bestEmployee;
};

console.log('Username with the best number of tasks is', getNameOfTheBestTasks(tasksCompleted));
