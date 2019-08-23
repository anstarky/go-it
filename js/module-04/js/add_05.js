/*
  Напиши функцию countTotalSalary(salaries).

  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.

  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

const countTotalSalary = function (salaries) {
  let total = 0;
  for (const key in salaries) {
    total += salaries[key];
  }
  return total;
};

// Вызовы функции для проверки
console.log(
  countTotalSalary({}),
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

/* Альтернативный вариант */

const sum = obj => Object.keys(obj).reduce((acc, key) => acc += obj[key], 0);

console.log('sum', sum({
  mango: 100,
  poly: 150,
  alfred: 80,
}));

console.assert(
  countTotalSalary({}) === 0,
  'Error: sum for no properties',
); // 0

console.assert(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }) === 330,
  'Error: sum for 3 properties. !== 330',
); // 330
