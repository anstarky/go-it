import {
  notepad
} from '../mvc/model';
import {
  refreshList
} from '../mvc/view';

export default function filterByText(e) {
  e.preventDefault();
  const {
    value
  } = e.target;
  const filtered = notepad.filterNotesByQuery(value);
  refreshList(filtered);
}