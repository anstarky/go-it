/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Submit" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const refs = {
  radioBtn: document.querySelectorAll('.options input'),
  submitBtn: document.querySelector('.btn'),
  resultTxt: document.querySelector('.result'),
};

function whoCheck(event) {
  event.preventDefault();
  const checkedInput = Array.from(refs.radioBtn).find(elem => elem.checked);
  refs.resultTxt.textContent = `Result: ${checkedInput.value}`;
}

refs.submitBtn.addEventListener('click', whoCheck);
