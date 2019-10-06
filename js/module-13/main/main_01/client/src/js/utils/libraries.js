import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { NOTIFICATION_MESSAGES } from './constants';

const notyf = new Notyf();

MicroModal.init();

const closeEditor = () => {
  MicroModal.close('note-editor-modal');
};

const openEditor = () => {
  MicroModal.show('note-editor-modal');
};

const {
  NOTE_ADDED_SUCCESS,
  NOTE_DELETED_SUCCESS,
  NOTE_SAVE_SUCCESS,
  EDITOR_FIELDS_EMPTY
} = NOTIFICATION_MESSAGES;
const notificationAdded = msg => {
  const message = msg || NOTE_ADDED_SUCCESS;
  notyf.success(message);
};
const notificationSave = msg => {
  const message = msg || NOTE_SAVE_SUCCESS;
  notyf.success(message);
};
const notificationDeleted = msg => {
  const message = msg || NOTE_DELETED_SUCCESS;
  notyf.success(message);
};
const notificationError = msg => {
  const message = msg || EDITOR_FIELDS_EMPTY;
  notyf.error(message);
};

export {
  closeEditor,
  openEditor,
  notificationSave,
  notificationAdded,
  notificationDeleted,
  notificationError
};
