/*

Пришло время добавить плагины модального окна, оповещений и шаблонизацию.

Разметка проекта немного изменилась, из-за того что форма добавления заметки теперь будет жить в диалоговом окне и появляться по необходимости. Поэтому возьми обновленный HTML и CSS из этой ветки репозитория, обязательно прочитай инструкцию.

В этом видео можно посмотреть как должен вести себя интерфейс.

Тебе необходимо добавить следующий функционал:

    Разметку заметки сделай внешним шаблоном, используй шаблонизатор handlebars
    При клике по button[data-action="open-editor"] показывается модальное окно с редактором заметок. Разметка уже готова, используй плагин модального окна micromodal.
    При попытке отправить незаполненную форму заметки, замени некрасивый alert на плагин оповещений. Так же пусть оповещения всплывают при удачном добавлении или удалении заметки. Используй плагин notyf

*/

import {
    refreshList
} from "./mvc/view";
import {
    notepad
} from './mvc/model';
import './controllers/controller';

refreshList(notepad._notes);