/*
  Напиши скрипт который:

  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword,
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/

const correctPassword = 'jqueryismyjam';
const message = 'Введите пароль доступа';
const accessAllowed = 'Доступ в секретный бункер разрешен!';
const accessDenieded = 'Неверный пароль, активирована система защиты!';
const cancel = 'Была нажата отмена!';

const password = prompt(message);

if (password === correctPassword) {
  alert(accessAllowed);
} else if (password === null) {
  alert(cancel);
} else {
  alert(accessDenieded);
}
