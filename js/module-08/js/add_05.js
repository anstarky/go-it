/*
  Есть список с классом .size-filter из произвольного
  количества чекбоксов, каждый из которых содержит
  размер одежды в фильтре.

  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.

  Возвращает массив значений атрибута value.
*/

const list = document.querySelectorAll('.size-filter input[type="checkbox"]');
console.log(list);

const collectInputData = inputs => ([...inputs]).filter(elem => elem.checked).map(elem => elem.value);

console.log(collectInputData(list));

/* Альтернативный вариант:

const ref = {
  inputs: document.querySelectorAll('.size-filter input[type="checkbox"]'),
  checked () {
    return [...this.inputs].filter(e => e.checked)
  },
  result: document.querySelector(".result")
};

function collectInputData (inputs) {
  return inputs.map(e => `value: ${e.value} = ${e.parentNode.textContent.trim()}`)
}

ref.result.textContent = collectInputData(ref.checked()).join('\n');
*/
