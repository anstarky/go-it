/*
  Напиши функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверяeт ее на содержание слов: spam и sale

  Если нашли запрещенное слово, то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/

/*
function checkForSpam(str) {
  return str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
}
*/

const checkForSpam = str => str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');

// Вызовы функции для проверки
console.log('В строке есть запрещенное слово? ', checkForSpam('Latest technology news')); // false

console.log('В строке есть запрещенное слово? ', checkForSpam('JavaScript weekly newsletter')); // false

console.log('В строке есть запрещенное слово? ', checkForSpam('Get best sale offers now!')); // true

console.log('В строке есть запрещенное слово? ', checkForSpam('[SPAM] How to earn fast money?')); // true
