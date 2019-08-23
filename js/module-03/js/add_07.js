/* eslint-disable no-restricted-syntax */
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

  for (const element of arguments) {
    if (!uniqueNumbers.includes(element)) {
      uniqueNumbers.push(element);
    }
  }

  return NewArr;
};

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log('Новый массив:', uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log('Новый массив:', uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log('Новый массив:', uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
