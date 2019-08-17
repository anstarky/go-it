/*
  Напиши функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает строку "Even" если число четное и строку "Odd" если не четное.
*/

/*
const checkNumberType = function (num) {
  return ((num % 2) === 0) ? 'Even' : 'Odd';
};
*/

const checkNumberType = num => (((num % 2) === 0) ? 'Even' : 'Odd');

// Вызовы функции для проверки
console.log('Четность числа 2:', checkNumberType(2)); // 'Even'

console.log('Четность числа 46:', checkNumberType(46)); // 'Even'

console.log('Четность числа 3:', checkNumberType(3)); // 'Odd'

console.log('Четность числа 17:', checkNumberType(17)); // 'Odd'
