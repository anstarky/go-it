/*
	Напишите скрипт который:

		- При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
		- При наборе текста в инпуте (событие input), текущее его значение должно
		отображаться в p.input-value
*/

const refs = {
  input: document.querySelector('input'),
  message: document.querySelector('.message'),
  inputValue: document.querySelector('.input-value'),
  string: 'Input is in focus!',
};

function inputInFocus() {
  refs.message.textContent = refs.string;
}

function inputInNotFocus() {
  refs.message.textContent = '';
}

function inputText() {
  refs.inputValue.textContent = `Current input value: ${refs.input.value}`;
}


refs.input.addEventListener('focus', inputInFocus);
refs.input.addEventListener('blur', inputInNotFocus);
refs.input.addEventListener('input', inputText);
