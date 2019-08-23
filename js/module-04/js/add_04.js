/*
  Напиши функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

/* Вариант 1 */

const isObjectEmpty = function (obj) {
  let count = 0;

  for (const key in obj) {
    count += 1;
  }
  return (count === 0);

  /* Альтернативный вариант:
    const tempArray = [];
    for (const key in obj) {
      tempArray.push(key);
    }
    return (tempArray.length === 0);
  */
};


// Вызовы функции для проверки
console.log(
  isObjectEmpty({}),
); // true

console.log(
  isObjectEmpty({
    a: 1,
  }),
); // false

console.log(
  isObjectEmpty({
    a: 1,
    b: 2,
  }),
); // false

/* Вариант 2 */
/*
const isObjectEmpty = obj => Object.keys(obj).length === 0;

// Вызовы функции для проверки
console.assert(
  isObjectEmpty({}) === true,
  'Error: number for no properties',
); // true

console.assert(
  isObjectEmpty({ a: 1 }) === false,
  'Error: number for 1 properties',
); // false

console.assert(
  isObjectEmpty({ a: 1, b: 2 }) === false,
  'Error: number for 2 properties',
); // false
*/
