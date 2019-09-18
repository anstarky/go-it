/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* =================================================================== */

/*
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/

/*
const findGreaterThan = (num, arr) => {
    const result = [];

      for (let i = 0, max = arr.length; i < max; i += 1) {
        if (arr[i] > num) {
          result.push(arr[i]);
        }
      }

      return result;
    };
*/

const findGreaterThan = (num, arr) => arr.filter(elem => elem > num);

console.group('Функция findGreaterThan:');
console.log(findGreaterThan(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
console.log(findGreaterThan(3, [1, 2, 3, 4, 5])); // [4, 5,]
console.log(findGreaterThan(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]
console.groupEnd('Функция findGreaterThan:');

/* =================================================================== */

/*
  Функция multiplyBy принимает два параметра - число и массив.
  Возвращает массив все значения которого умножены на число.
*/

/*
const multiplyBy = (num, arr) => {
  const result = [];

  for (let i = 0, max = arr.length; i < max; i += 1) {
    result.push(arr[i] * num);
  }

  return result;
};
*/

const multiplyBy = (num, arr) => arr.map(elem => elem * num);

console.group('Функция multiplyBy:');
console.log(multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
console.log(multiplyBy(4, [1, 2, 3, 4, 5])); // [4, 8, 12, 16, 20]
console.groupEnd('Функция multiplyBy:');

/* =================================================================== */

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/

/*
function summAllNumbers(...args) {
  let accumulator = 0;

  for (let i = 0, max = args.length; i < max; i += 1) {
    accumulator += args[i];
  }

  return accumulator;
}
*/

const summAllNumbers = (...args) => args.reduce((accum, value) => accum + value, 0);

console.group('Функция summAllNumbers:');
console.log(summAllNumbers(1, 2, 3)); // 6
console.log(summAllNumbers(1, 2, 3, 4)); // 10
console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15
console.groupEnd('Функция summAllNumbers:');

/* =================================================================== */

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/

/*
const findEvery = (num, arr) => {
  for (let i = 0, max = arr.length; i < max; i += 1) {
    if (arr[i] < num) {
      return false;
    }
  }

  return true;
};
*/

const findEvery = (num, arr) => arr.every(elem => elem >= num);

console.group('Функция findEvery:');
console.log(findEvery(5, [5, 6, 7, 8, 9])); // true
console.log(findEvery(6, [5, 6, 7, 8, 9])); // false
console.log(findEvery(4, [5, 6, 7, 8, 9])); // true
console.groupEnd('Функция findEvery:');

/* =================================================================== */
