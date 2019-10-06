import shortid from 'shortid';
import refs from '../utils/refs';
import checkEmpty from './checkEmpty';
import exitEdit from './exitEdit';
import updateData from './updateData';
import {
  notepad
} from '../mvc/model';
import {
  notificationAdded,
  notificationError,
  notificationSave
} from '../utils/libraries';
import {
  PRIORITY_TYPES
} from '../utils/const';
import {
  state
} from './state';


export default function saveData(e) {
  e.preventDefault();
  const title = refs.title.value;
  const body = refs.body.value;
  if (checkEmpty()) {
    return;
  }
  if (!state.note) {
    const id = shortid.generate();
    const priority = PRIORITY_TYPES.LOW;
    notepad.saveNote({
      id,
      title,
      body,
      priority
    })
    notificationAdded();
  }

  if (state.note) {
    updateData();
  }
  exitEdit();
}