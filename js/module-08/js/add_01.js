/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

const categories = document.querySelector('.categories').children;
const category = [...categories].map(elem => elem.firstChild.textContent.trim());

for (let i = 0; i < category.length; i += 1) {
  console.log('Категория:', category[i]);
  const countIncludes = categories[i].firstElementChild.childElementCount;
  console.log('Количество вложенных li: ', countIncludes);
}

/* Альтернативный вариант:

const ref = {
  categories: document.querySelectorAll(".categories > li"),
  result: document.querySelector(".result")
};

console.log(ref.categories);

// function getData (list) {
//     const texts = [...list].map(e => e.firstChild.textContent.trim());
//     console.log('texts', texts);
//     const quantityInners = [...list].map(e => e.querySelectorAll('ul > li').length);
//     console.log('quantityInners', quantityInners);
// }

function getData(list) {
  return [...list].map(
    e => `Категория: ${e.firstChild.textContent.trim()}
Количество вложенных li: ${e.querySelectorAll("ul > li").length}
  `
  ).join('\n');
}

ref.result.textContent = getData(ref.categories);

*/
