/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const list = document.querySelector('.list');
list.firstElementChild.style.color = 'red';
list.lastElementChild.style.color = 'blue';

/* Альтернативный вариант:

const ref = {
	list: document.querySelector(".list")
  };

  // console.log(ref.list);

  function setColor(elem) {
	elem.firstElementChild.style.color = "red";
	elem.lastElementChild.style.color = "blue";
  }

  setColor(ref.list);
*/
