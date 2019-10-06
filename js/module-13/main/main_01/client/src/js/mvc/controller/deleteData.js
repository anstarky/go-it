import { notepad } from '../model';
import { state } from './state';
import { notificationDeleted } from '../../utils/libraries';

export default function deleteData({ target }) {
  state.note = null;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    const { id } = li.dataset;
    li.remove();
    notepad.deleteNote(id);
    notificationDeleted();
  }
}
