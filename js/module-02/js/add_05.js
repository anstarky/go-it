/*
  Напиши скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив matched.

  В результате в массиве matched будут все подходяшие числа.

  PS: используй цикл for или for...of и оператор ветвления if
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matchedFor = [];
const matchedForOf = [];


for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > num) {
    matchedFor.push(numbers[i]);
  }
}

console.log('Сформированный массив средствами for:', matchedFor); // [17, 14, 14, 34, 18, 26]


for (const number of numbers) {
  if (number > num) {
    matchedForOf.push(number);
  }
}

console.log('Сформированный массив средствами for..of:', matchedForOf); // [17, 14, 14, 34, 18, 26]
