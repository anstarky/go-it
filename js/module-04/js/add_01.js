/* eslint-disable no-restricted-syntax */
/*
  Напиши скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'
    - заменяет значение hobby на 'javascript'
    - заменяет значение premium на false
    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of
    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

/* Простой вариант: */

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;


console.log('%cВывод с помощью Object.keys:', 'color: #f5871f;');

const keys = Object.keys(user);

for (const key of keys) {
  console.log(key, ': ', user[key]);
}


console.log('%c\nВывод с помощью Object.entries:', 'color: #f5871f;');

const entries = Object.entries(user);
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(key, ': ', value);
}

/* Более интересный вариант: */

function addProps(prop, value, obj) {
  obj[prop] = value;
}

function changeValue(prop, value, obj) {
  obj[prop] = value;
}

addProps('mood', 'happy', user);
changeValue('hobby', 'javascript', user);
changeValue('premium', false, user);

const stringEntriesByKey = (obj) => {
  let res = '{\n';
  const keys = Object.keys(obj);
  for (const key of keys) {
    res += `  ${key}: ${typeof obj[key] === 'string' ? `'${obj[key]}'` : obj[key]},\n`;
  }
  return `${res}}`;
};

console.log('%cВывод с помощью Object.keys:', 'color: #f5871f;');
console.log('users =', stringEntriesByKey(user));

const stringEntriesByEntries = (obj) => {
  let res = '{\n';
  const entries = Object.entries(obj);
  for (const item of entries) {
    res += `  ${item[0]}: ${typeof item[1] === 'string' ? `'${item[1]}'` : item[1]},\n`;
  }
  return `${res}}`;
};

console.log('%c\nВывод с помощью Object.entries:', 'color: #f5871f;');
console.log('users =', stringEntriesByEntries(user));
