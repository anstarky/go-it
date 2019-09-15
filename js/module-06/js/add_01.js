/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email.

  В prototype функции-конструктора добавь метод getInfo(),
  который выводит в консоль значения полей login и email.

  Обрати внимание, метод всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, выведи их в консоль.
*/
const Account = function Account(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const account = new Account('Mangozedog', 'mango@dog.woof');

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const account2 = new Account('Polyzecat', 'poly@cat.meow');
account2.getInfo();

const account3 = new Account('Fibyzecow', 'fiby@cow.moow');
account3.getInfo();
