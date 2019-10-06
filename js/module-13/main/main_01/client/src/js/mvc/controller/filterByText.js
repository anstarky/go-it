import { notepad } from '../model';
import { refreshList } from '../view';

export default function filterByText(e) {
    e.preventDefault();
    const { value } = e.target;
    const filtered = notepad.filterNotesByQuery(value);
    refreshList(filtered);
  }