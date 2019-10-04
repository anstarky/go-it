import shortid from 'shortid';
import {
  notepad
} from '../main_01';
import {
  refs,
  PRIORITY_TYPES,
} from '../utils/const';
import addListItem from '../view/addListItem';

function addNote(event) {
  event.preventDefault();

  const title = refs.title.value || '';
  const body = refs.body.value || '';

  if ((title.length === 0) || (body.length === 0)) {
    alert('Необходимо заполнить все поля!');
    return;
  }

  const note = {
    id: shortid.generate(),
    title,
    body,
    priority: PRIORITY_TYPES.LOW,
  };

  notepad.saveNote(note);
  event.target.reset();

  addListItem(refs.noteList, note);
}

export default addNote;