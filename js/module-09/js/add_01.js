/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/


const refButton = document.querySelector('.button');
let count = Number(refButton.textContent);

const handleClick = () => {
  count += 1;
  refButton.textContent = count;
};

refButton.addEventListener('click', handleClick);
