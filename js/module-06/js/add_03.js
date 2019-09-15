/* eslint-disable no-underscore-dangle */
/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
  constructor({
    maxSpeed = 0,
    nullSpeed = 0,
    speed = 0,
    running = false,
    distance = 0,
  }) {
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
    this._speed = speed;
    this._maxSpeed = maxSpeed;
    this._running = running;
    this._distance = distance;
    this._nullSpeed = nullSpeed;
  }

  turnOn() {
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    return this._running = true;
  }

  turnOff() {
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    return this._running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    return this._speed = spd <= this._maxSpeed ? spd : this._nullSpeed;
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    return this._speed = (spd <= this._maxSpeed) && (spd >= this._nullSpeed) ? spd : this._nullSpeed;
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    return this._distance = (this._running) ? hours * this._speed : 0;
  }
}

const car = new Car({
  maxSpeed: 100,
});

console.log('Глушим автомобиль. Машина заведена? -', car.turnOff());
console.log('Включаем зажигание. Машина заведена? -', car.turnOn());
console.log('Текущая скорость не больше максимальной - ', car.accelerate(99));
console.log('Текущая скорость больше максимальной, останавливаемся, скорость - ', car.accelerate(101));
console.log('Текущая скорость не больше максимальной и не меньше 0 - ', car.decelerate(80));
console.log('Пройденный километраж - ', car.drive(5));
console.log('Глушим автомобиль. Машина заведена? -', car.turnOff());
console.log('Пройденный километраж - ', car.drive(8));
console.log('Текущая скорость не больше максимальной, но меньше 0. Примем, что скорость - ', car.decelerate(-20));
