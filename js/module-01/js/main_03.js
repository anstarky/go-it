/*
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

    китай - 100 кредитов
    южная америка - 250 кредитов
    австралия - 170 кредитов
    индия - 80 кредитов
    ямайка - 120 кредитов

PS: используй switch
*/

const inputCountry = prompt('Введите страну');
let country = inputCountry.toLowerCase();
let credit;
let messageYes = null;
let messageNo = null;
let messageUser;

switch (country) {
  case 'китай':
    credit = 100;
    break;
  case 'южная америка':
    credit = 250;
    break;
  case 'австралия':
    credit = 170;
    break;
  case 'индия':
    credit = 80;
    break;
  case 'ямайка':
    credit = 120;
    break;
  default:
    messageNo = 'В вашей стране доставка не доступна!';
}

country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();
messageYes = `Доставка в ${country} будет стоить ${credit} кредитов`;

if (messageNo === null) {
  messageUser = messageYes;
} else {
  messageUser = messageNo;
}

alert(messageUser);
