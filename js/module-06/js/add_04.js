/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */

class Car {
  constructor({
    maxSpeed = 0,
    nullSpeed = 0,
    speed = 0,
    running = false,
    distance = 0,
    currentCar,
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

  static getSpecs(currentCar) {
    return console.log(`maxSpeed: ${currentCar._maxSpeed}, speed: ${currentCar._speed}, running: ${currentCar._running}, distance: ${currentCar._distance}`);
  }
}

const car = new Car({
  maxSpeed: 100,
});
car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
