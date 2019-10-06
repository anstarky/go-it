/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const refs = {
  inputs: document.querySelectorAll('.expression > input'),
  result: document.querySelector('.result'),
  button: document.querySelector('button[data-action="add"]'),
};

const [input_1, input_2] = refs.inputs;

const handleClick = (event) => {
  event.preventDefault(); // Заменяет в form указание method="post"

  let sum = 0;
  sum = Number(input_1.value) + Number(input_2.value);
  // sum = Array.from(refs.inputs).reduce(accum, elem) => parseFloat(elem.value) + a, 0);
  refs.result.textContent = sum;
};

refs.button.addEventListener('click', handleClick);
