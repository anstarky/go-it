import refs from '../../utils/refs';
import checkEmpty from './checkEmpty';
import exitEdit from './exitEdit';
import updateData from './updateData';
import { notepad } from '../model';
import { notificationAdded, notificationError } from '../../utils/libraries';
import { PRIORITY_TYPES } from '../../utils/constants';
import { state } from './state';


export default function saveData(e) {
  e.preventDefault();
  const title = refs.title.value;
  const body = refs.body.value;
  if (checkEmpty()) {
    notificationError();
    return;
  }
  if (!state.note) {
    const priority = PRIORITY_TYPES.LOW;
    notepad.saveNote({ title, body, priority }).then(data => {
      notificationAdded();
      exitEdit();
    });
  }
  if (state.note) {
    updateData();
  }
}
