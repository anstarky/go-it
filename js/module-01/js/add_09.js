/*
Напиши скрипт, переводящий число в двоичную систему.

Есть переменная message в которую будет записано сообщение о результате.
При загрузке страницы у посетителя запрашивается число через prompt "Введите целое число":
   Если нажали Cancel, записать в message строку 'Отменено пользователем!'
   В противном случае, если введено целое число, записать в message строку результат в двоичном виде.
   В противном случае, если введено не целое число, записать в message строку "Ошибка. Вы ввели не целое число".
   После всех проверок вывести в alert значение переменной message. (edited)
*/

const ENTER_INTEGER = 'Введите целое число';
const CANCEL = 'Отменено пользователем';
const ERROR_NOT_INTEGER = 'Ошибка. Вы ввели не целое число';
const input = prompt(ENTER_INTEGER, 0);
let message = +input;

if (input === null) {
  message = CANCEL;
} else if (!Number.isInteger(message)) {
  message = ERROR_NOT_INTEGER;
} else {
  message = message > 0
		? `0b${message.toString(2)}`
		: `-0b${-1 * message.toString(2)}`;
}

alert(message);
