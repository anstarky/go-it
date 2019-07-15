/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
const message = 'Proin sociis natoque et magnis parturient montes mus';
let price = 0;
const cost = 10;
let words = [];

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
words = message.split(' ');
console.log('Массив:', words);

// Выведи в консоли длину массива words
console.log('Длина массива -', words.length, 'элементов'); // 8

// Вычисли сколько будет стоить гравировка и запиши результат в переменную price
price = words.length * cost;
console.log('Стоимость гравировки составляет', price, 'кредитов'); // 80
