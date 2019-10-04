import {
  refs,
} from '../utils/const';
import {
  notepad
} from '../main_01';
import renderNoteList from '../view/renderNoteList';

function filterNoteList() {
  const query = refs.searchInput.value.toLowerCase();
  const filteredItems = notepad.filterNotesByQuery(query);
  renderNoteList(refs.noteList, filteredItems);
}

export default filterNoteList;