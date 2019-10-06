import {
  notepad
} from '../mvc/model';
import refs from '../utils/refs';
import {
  notificationSave
} from '../utils/libraries';
import exitEdit from './exitEdit';
import {
  state
} from './state';

export default function updateData() {
  const title = refs.title.value;
  const body = refs.body.value;

  state.note.title = title;
  state.note.body = body;

  const {
    id
  } = state.note;

  notepad.updateNoteContent(id, {
    title,
    body
  });

  notificationSave();
  exitEdit();

}