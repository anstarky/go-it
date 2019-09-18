/*
  Напиши функцию getTotal(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  Используй метод reduce.
*/

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40,
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1,
};
// [[bread, 2],[apples, 4],[chicken, 1]]
const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1,
};

const orderC = {
  bread: 2,
  cheese: 2,
};

/* Пока я не построила обычный for, я не смогла написть reduce()

Альтернативный вариант:
const getTotal = (products, order) => {
  let total = 0;

  for (let i = 0; i < Object.keys(order).length; i += 1) {
    total += Object.values(order)[i] * products[Object.keys(order)[i]];
  }

  return total;
};
*/

const getTotal = (products, order) => Object.values(order).reduce((total, elem, index) => total += elem * products[Object.keys(order)[index]], 0);

// Вызовы функции для проверки
console.log(getTotal(products, orderA)); // 140
console.log(getTotal(products, orderB)); // 120
console.log(getTotal(products, orderC)); // 80
