/*
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

/* Вариант 1 */

const countProps = function (obj) {
  let count = 0;

  for (const key in obj) {
    count += 1;
  }
  return count;

  /* Альтернативный вариант:
    const tempArray = [];
    for (const key in obj) {
      tempArray.push(key);
    }
    return tempArray.length;
  */
};

// Вызовы функции для проверки
console.log(
  countProps({}),
); // 0

console.log(
  countProps({
    a: 1,
    b: 3,
    c: 'hello',
  }),
); // 3

/* Вариант 2 */
/*
const countProps = obj => Object.keys(obj).length;

console.assert(
  countProps({}) === 0, 'Error: number for no properties',
); // 0

console.assert(
  countProps({
    a: 1,
    b: 3,
    c: 'hello',
  }) === 3,
  'Error: number for 3 properties',
); // 3
*/
