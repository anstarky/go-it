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

console.log('Сотрудник, выполнивший больше всего задач - ', key);

/* Вариант 2 */

const getNameWithTheBestTasks = (obj) => {
  const keys = Object.keys(obj); // ['ann', 'david', ... ]
  const max = 0;
  let name = '';
  for (const key of keys) {
    // ann        29   >  0  ?   ann  :  ''
    // david        35   >  29  ? david : ann
    name = obj[key] > max ? key : name;
  }
  return name;
};
console.log('Username with the best number of tasks is', getNameWithTheBestTasks(tasksCompleted));
