import {
  notepad
} from '../mvc/model';
import refs from '../utils/refs';
import {
  openEditor
} from '../utils/libraries';
import {
  state
} from './state';

export default function editData({
  target
}) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'edit-note') {
    const li = target.closest('.note-list__item');
    const {
      id
    } = li.dataset;
    const note = notepad.findNoteById(id);
    const {
      title,
      body
    } = note;

    refs.title.value = title;
    refs.body.value = body;
    state.note = note;

    openEditor();
  }
}