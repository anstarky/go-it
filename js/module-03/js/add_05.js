/* eslint-disable func-names */
/*
  Напиши фукнцию findLongestWord(str), которая принимает
  параметром произвольную строку и возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

const findLongestWord = function (str) {
  let arrayWord = [];
  let longestWord = '';

  arrayWord = str.split(' ');

  for (let i = 0; i < arrayWord.length; i += 1) {
    if (arrayWord[i].length > longestWord.length) {
      longestWord = arrayWord[i];
    }
  }
  return longestWord;
};

// Вызовы функции для проверки
console.log('Самое длинное слово - ',
  findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log('Самое длинное слово - ',
  findLongestWord('Google do a roll')); // 'Google'

console.log('Самое длинное слово - ',
  findLongestWord('May the force be with you')); // 'force'
