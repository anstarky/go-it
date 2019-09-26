/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

const list = document.querySelector('.list');
const li = document.querySelectorAll('li');
const button = document.querySelectorAll('button');

function deleteItem({
  target,
}) {
  const {
    nodeName,
  } = target;
  if (nodeName === 'BUTTON') {
    list.removeChild(target.parentElement);
  }
}

list.addEventListener('click', deleteItem);
