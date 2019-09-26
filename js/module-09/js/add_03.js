/*
	Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1.

	- Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
	- Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
	- Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
	- Привяжите вызовы методов и значение счетчика к раметке
	*/

const refs = {
	btnDec: document.querySelector('button[data-action="sub"]'),
	btnInc: document.querySelector('button[data-action="add"]'),
	result: document.querySelector('.value'),
};

class Counter {
	constructor(onChange) {
		this.value = 0;
		this._onChange = onChange.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.value += 1;
		this._onChange(this.value);
	}

	/*
	  Если мы напишем такую же функцию increment, только стрелочную increment = () => {},
	  тогда можно избавиться от присвоения this.increment = this.increment.bind(this); в  конструкторе
	*/

	decrement() {
		this.value -= 1;
		this._onChange(this.value);
	}
}


function onChange(num) {
	refs.result.textContent = num;
}

const counter = new Counter(onChange);

refs.btnDec.addEventListener('click', counter.decrement);
refs.btnInc.addEventListener('click', counter.increment);