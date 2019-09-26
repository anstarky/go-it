/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  - Если введено подходящее количество, то outline инпута становится зеленым,
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
const inputs = document.querySelectorAll('.input-list input');

const inputsArray = Array.from(inputs);

function validInput(target) {
  target.preventDefault();

  inputsArray.map((input) => {
    if (Number(input.dataset.length) === input.value.length) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  });
}

inputsArray.map(elem => elem.addEventListener('blur', validInput));