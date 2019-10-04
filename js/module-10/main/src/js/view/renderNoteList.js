import createListItem from './createListItem';
import {
  refs
} from '../utils/const';

function renderNoteList(noteList, data) {
  refs.noteList.innerHTML = '';
  refs.noteList.append(...data.map(item => createListItem(item)));
}

export default renderNoteList;