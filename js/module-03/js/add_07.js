/*
  Есть массив уникальных чисел uniqueNumbers.

  Написать функцию, addUniqueNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers = [2, 1, 4, 9];

const addUniqueNumbers = function unique() {
  const NewArr = [];

  for (element of arguments) {
    if (!uniqueNumbers.includes(element)) {
      uniqueNumbers.push(element);
    }
  }

  return NewArr;
};

/* Код не работает!!

const addUniqueNumbers = function () {
  const args = Array.from(arguments);

  for (let j = 0; j < args.length; j += i) {
    for (let i = 0; i < uniqueNumbers.length; i += i) {
      if (args[j] != uniqueNumbers[i]) {
        uniqueNumbers.push(args[j]);
      }
    }
  }

  return uniqueNumbers;
};
*/

/* Код не работает!!

const addUniqueNumbers = function name() {
  for (const argument of arguments) {
    for (const argument2 of uniqueNumbers) {
      if (argument !== argument2) {
        uniqueNumbers.push(argument);
      }
    }
  }
  return uniqueNumbers;
};
*/

/* Код не работает!!

const addUniqueNumbers = function () {
  for (const argument of arguments) {
    for (let i = 0; i < uniqueNumbers.length; i += i) {
      if (argument != uniqueNumbers[i]) {
        uniqueNumbers.push(argument);
      }
    }
  }
  return uniqueNumbers;
};
*/

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log('Новый массив:', uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log('Новый массив:', uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log('Новый массив:', uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
