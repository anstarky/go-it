/*

Пришло время начать создавать интерфейс для нашего приложения заметок, начнем с динамического создания коллекции заметок. Хорошая новость - верстка уже готова, тебе необходимо только написать JS-код. 🎉

Используй заготовку проекта из этой ветки репозитория, обязательно прочитай инструкцию.

    Перенеси свой класс Notepad, сделай экземпляр передав ему начальные заметки и используй геттер для получения всех заметок.
    Напиши функцию createListItem(note) для создания одного элемента списка ul.note-list c карточкой заметки. Создавай DOM-узлы с помощью document.createElement.
    Напиши функцию renderNoteList(listRef, notes), которая получает ссылку на DOM-узел списка ul.note-list и массив объектов заметок, вызывает createListItem(note) столько раз, сколько объектов в массиве, после чего добавляет все карточки в список.

Элемент списка имеет следующий вид.

    Используй карты имен иконок и действий заметки для подстановки констант.
    Обрати внимание на data-атрибут data-id у элемента списка, туда записывай идентификатор заметки, это понадобится в следующих работах.

Разметка элемента списка довольно большая, поэтому есть смысл не писать все в одной функции createListItem (будет простыня кода), а вынести создание отдельных частей карточки и просто вызывать их в createListItem, к примеру:

    Для div.note__content можно написать функцию createNoteContent.
    Для footer.note__footer можно написать функцию createNoteFooter.
    Так как button.action повторяется много раз, можно написать функцию createActionButton.

*/
import Notepad from './Notepad';
import renderNoteList from './view/renderNoteList';
import {
    initialNotes
} from './db';
import {
    refs
} from './utils/const';
import addNote from './controllers/addNote';
import editNote from './controllers/editNote';
import deleteNote from './controllers/deleteNote';
import filterNoteList from './controllers/filterNoteList';
import increasePriority from './view/incPriority';
import decreasePriority from './view/decPriority';

// import decreasePriority from './view/setPriority';


const notepad = new Notepad(initialNotes);


refs.form.addEventListener('submit', addNote);
refs.noteList.addEventListener('click', editNote);
refs.noteList.addEventListener('click', deleteNote);
refs.searchInput.addEventListener('input', filterNoteList);
refs.noteList.addEventListener('click', increasePriority);
refs.noteList.addEventListener('click', decreasePriority);

renderNoteList(refs.noteList, notepad.notes);

// refs.decreasePriority.addEventListener('click', decreasePriority);


export {
    notepad
};