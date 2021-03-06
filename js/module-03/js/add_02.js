/*
  Напиши функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/

/* Альтернативный вариант
function formatString(str) {
  if (str.length > 40) {
    str = `${str.slice(0, 40)  }...`;
  }
  return str;
}
*/

const formatString = str => str = str.length > 40 ? `${str.slice(0, 40)}...` : str;

// Вызовы функции для проверки
console.log('Оригинальная строка:\n',
  formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка

console.log('Форматированная строка:\n',
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

console.log('Оригинальная строка:\n',
  formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

console.log('Форматированная строка:\n',
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')); // вернется форматированная строка
