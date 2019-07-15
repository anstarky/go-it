/*
  Напиши скрипт, который проверяет произвольную строку
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = 'May the force be with you';
let longestWord = '';
let arrayWord = [];

arrayWord = message.split(' ');

for (let i = 0; i < arrayWord.length; i += 1) {
  if (arrayWord[i].length > longestWord.length) {
    longestWord = arrayWord[i];
  }
}

console.log('Исходная строка:', message);
console.log('Самое длинное слово в строке:', longestWord); // 'force'
