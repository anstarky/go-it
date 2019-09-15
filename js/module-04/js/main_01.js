/* eslint-disable no-restricted-syntax */
/* Создай объект notepad для работы с массивом заметок. Каждая заметка это объект следующего формата:

id: string | integer
title: string
body: string
priority: integer [0-2]

    id - уникальный идентификатор объекта, чтобы можно было найти его в коллекции, строка.
    title - заголовок заметки, строка.
    body - текст заметки, строка.
    priority - значение приоритета, от 0 (низкий) до 2 (высокий).

Вот карта приоритетов, используй ее.
*/

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

/* Напиши код для работы методов данного объекта. */

const notepad = {
  notes: [],
  getNotes() {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
    // return note.body;
    return this.notes;
  },
  findNoteById(id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */

    /* Вариант в одну строку:
      Для каждого элемента берем его id и сравниваем с этим id
      Если эти id совпадут, то нам этот метод вернет этот элемент, если не совпадут - undefined.
    */

    return this.notes.find(e => e.id === id);

    /* Альтернативный вариант

    for (const elem of this.notes) {
      if (elem.id === id) {
        return elem;
      }
    }
    return undefined;
    */
  },
  findIndexNoteById(id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: index массива заметок по совпавшему полю id или -1  если ничего не найдено
     */

    this.findIndexNoteById = function (id) {
      return this.notes.findIndex(e => e.id === id);
    };

    /* Альтернативный вариант:
    for (const index in this.notes) {
      if (this.notes[index].id === id) {
        return index;
      }
    }
    return -1;
    */
  },
  saveNote(note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */

    this.notes.push(note);
    return note;
  },
  deleteNote(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */

    this.notes.splice(this.findIndexNoteById(id), 1);

    /* Альтернативный код 1
      this.notes = this.notes.filter(e => e.id !== id);
    */

    /* Альтернативный код 2
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
        break; // вместо break можно написать return
      }
    }
    */

    /* Альтернативный код 3
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        return this.notes.splice(i, 1);
      }
    }
    */
  },
  updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */

    /* Альтернативный код 1
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes[i] = {
          ...this.notes[i],
          ...updatedContent,
        };
        break;
      }
    }
    */

    /* Альтернативный код 2
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        Object.assign(this.notes[i], updatedContent);
        break;
      }
    }
    */

    Object.assign(this.findNoteById(id), updatedContent);
    return this.notes;
  },
  updateNotePriority(id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    this.findNoteById(id).priority = priority;
    return this.notes;

    /* Альтернативный вариант:

    const note = this.findNoteById(id);

    if (!note) return;

    note.priority = priority;

    */
  },
  filterNotesByQuery(query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */

    /* Альтернативный код

    return this.notes.filter(e => e.body.includes(query) || e.title.includes(query));

    */

    const newArray = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      const titleLower = this.notes[i].title.toLowerCase();
      const bodyLower = this.notes[i].body.toLowerCase();
      if (titleLower.includes(query) || bodyLower.includes(query)) {
        newArray.push(this.notes[i]);
      }
    }
    return newArray;

    /* Альтернативный код 1

    for (const obj of this.notes) {
      const titleLower = obj.title.toLowerCase();
      const bodyLower = obj.body.toLowerCase();
      if (titleLower.includes(query) || bodyLower.includes(query)) {
        newArr.push(obj);
      }
    }
    return newArr;

    */

    /* Альтернативный код 2

    const filteredNotes = [];

    for (const note of this.notes) {
      const noteContent = `${note.title} ${note.body}`;
      const hasQuery = noteContent.toLowerCase().includes(query.toLowerCase());
      if (hasQuery) {
        filteredNotes.push(note);
      }
    }
    return filteredNotes;

    */

    /* Альтернативный код 3

    const filteredNotes = [];

    for (const note of this.notes) {
      const {title, body} = note;
      const noteContent = `${title} ${body}`;
      const hasQuery = noteContent.toLowerCase().includes(query.toLowerCase());
      if (hasQuery) {
        filteredNotes.push(note);
      }
    }
    return filteredNotes;

    */
  },
  filterNotesByPriority(priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */

    /* Альтернативный код
      return this.notes.filter(e => e.priority === priority);
    */

    const newArray = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].priority === priority) {
        newArray.push(this.notes[i]);
      }
    }
    return newArray;

    /* Альтернативный код

    const newArr = [];
    for (const obj of this.notes) {
      if (obj.priority === priority) {
        newArr.push(obj);
      }
    }

    return newArr;

    */
  },
};
/* Далее идет код для проверки работоспособности объекта, вставь его в конец скрипта. Твоя реализация методов объекта notepad должна проходить этот тест. */

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */

notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.getNotes());

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */

notepad.updateNotePriority('id-3', Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.getNotes());

/*
 * Решил отфильтровать заметки по слову html
 */

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */

console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */

console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */

notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log('Заметки после обновления контента заметки с id-3: ', notepad.getNotes());

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */

notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());
