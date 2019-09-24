/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
const countDiv = 5;
const root = document.querySelector('#root');
const sizeOfDiv = 30;
const stepSize = 10;


function getRandomColor() {
  return `#${parseInt(Math.random() * 0xffffff).toString(16)}`;
}

const createBoxes = (num) => {
  const wrap = document.createElement('div');
  const divArray = new Array(num).fill('');

  divArray.map((elem, index) => {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomColor();
    div.style.width = `${sizeOfDiv + index * stepSize}px`;
    div.style.height = `${sizeOfDiv + index * stepSize}px`;
    console.log(div);

    wrap.appendChild(div);
  });

  return wrap;
};

root.append(createBoxes(countDiv));

/* Альтернативный вариант:
const ref = {
  root: document.querySelector("#root")
};

const getRandomHEXByte = () => {
  let res = Math.floor(Math.random() * 256).toString(16);
  return (res = res.length > 1 ? res : "0" + res);
};

const getRandomColor = () =>
  `#${getRandomHEXByte()}${getRandomHEXByte()}${getRandomHEXByte()};`;

  // Описание из ТЗ
const INIT = {
  SIZE: 30,
  STEP: 10
};

(function createBoxes(n) {
  const container = document.createElement("div");
  new Array(n).fill("").map((e, i) => {
    const div = document.createElement("div");
    div.style.cssText = `width: ${INIT.SIZE + i * INIT.STEP}px;
      height: ${INIT.SIZE + i * INIT.STEP}px;
      background-color: ${getRandomColor()};`;
    container.appendChild(div);
  });
  ref.root.appendChild(container);
})(6);
*/
