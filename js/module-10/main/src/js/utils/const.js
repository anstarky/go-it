const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const refs = {
  noteList: document.querySelector('.note-list'),
  form: document.querySelector('.note-editor'),
  title: document.querySelector('input[name="note_title"]'),
  body: document.querySelector('textarea[name="note_body"]'),
  searchInput: document.querySelector('.search-form__input'),
  increasePriority: document.querySelector('button[data-action="increase-priority"]'),
  // buttonDecreasePriority: document.querySelector('button[data-action="decrease-priority"]'),

};

export {
  PRIORITY_TYPES,
  ICON_TYPES,
  NOTE_ACTIONS,
  refs
};