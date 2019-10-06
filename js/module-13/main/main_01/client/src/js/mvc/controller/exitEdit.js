import { closeEditor } from '../../utils/libraries';
import reset from './reset';
import { refreshList } from '../view';
import { notepad } from '../model';
import { state } from './state';

export default function exitEdit() {
  reset();
  closeEditor();
  refreshList(notepad.get());
  state.note = null;
}
