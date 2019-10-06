import {
  closeEditor
} from '../utils/libraries';
import reset from './reset';
import {
  refreshList
} from '../mvc/view';
import {
  notepad
} from '../mvc/model';
import {
  state
} from './state';

export default function exitEdit() {
  reset();
  closeEditor();
  refreshList(notepad.notes);
  state.note = null;
}