/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

/* Альтернативный вариант
function getPx(str) {
  if (typeof str === 'string') {
    str = Number.parseFloat(str);
  } else {
    str = null;
  }
  return str;
}
*/

const getPx = str => str = typeof str === 'string' ? Number.parseFloat(str) : null;

// Вызовы функции для проверки
console.log('Передана строка и условие верно? ', getPx('10.5') === 10.5); // true
console.log('Передана строка и условие верно? ', getPx('0') === 0); // true
console.log('Передана строка и условие верно? ', getPx('10px') === 10); // true
console.log('Передана строка и условие верно? ', getPx(-1)); // null
console.log('Передана строка и условие верно? ', getPx(10)); // null
