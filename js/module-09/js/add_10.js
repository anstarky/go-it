/*
  Ознакомьтесь с HTML и CSS.

  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.

  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.

  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector('.menu');

function brouserPreventDefault(event) {
  event.preventDefault();
}

function setActiveItem({
  target,
}) {
  const arrayItem = Array.from(menu.children);
  const filteredArray = arrayItem;

  filteredArray.map((elem) => {
    elem.firstElementChild.classList.remove('active');
  });
  target.classList.add('active');
}

menu.addEventListener('click', setActiveItem);
menu.addEventListener('click', brouserPreventDefault);
