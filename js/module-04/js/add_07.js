/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const combine = (name, price) => {
  if (name.length !== price.length) return 'Ошибка: массивы не одинаковой длины';
  const arrayOfObject = [];
  for (const elem in name) {
    // {'Радар': 1000}
    // { ['Радар']: 1000}
    arrayOfObject.push({
      [name[elem]]: price[elem],
    });
  }
  return arrayOfObject;
};

const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price
