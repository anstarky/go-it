import {
  notepad
} from '../main_01';
import removeListItem from '../view/removeListItem';

function deleteNote(event) {
  event.preventDefault();
  const {
    target
  } = event;

  if (
    target.dataset.action === 'delete-note' ||
    target.parentNode.dataset.action === 'delete-note') {
    removeListItem(target);
  }
}

export default deleteNote;