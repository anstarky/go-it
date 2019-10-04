const createElem = (tag, className, text = null, id = null) => {
  const element = document.createElement(tag);
  className.split(' ').map(elem => element.classList.add(elem));
  if (id) {
    element.setAttribute('data-id', id);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createButton = (action, text) => {
  const button = createElem('button', 'action');
  button.setAttribute('data-action', action);
  const i = createElem('i', 'material-icons action__icon', text);
  button.append(i);

  return button;
};

const createListItem = ({
  id,
  title,
  body,
  priority,
}) => {
  const listItem = createElem('li', 'note-list__item', null, id);
  const divNote = createElem('div', 'note');
  const divNoteContent = createElem('div', 'note__content');
  const h2 = createElem('h2', 'note__title', title);
  const text = createElem('p', 'note__body', body);

  listItem.append(divNote);
  divNote.append(divNoteContent);
  divNoteContent.append(h2, text);

  const footer = createElem('footer', 'note__footer');

  const sectionLeft = createElem('section', 'note__section');

  const buttonDecrease = createButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN);
  const buttonIncrease = createButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP);
  const span = createElem('span', 'note__priority', `Priority: ${priority}`);

  sectionLeft.append(buttonDecrease, buttonIncrease, span);

  const sectionRight = createElem('section', 'note__section');

  const buttonEdit = createButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT);
  const buttonDelete = createButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE);

  sectionRight.append(buttonEdit, buttonDelete);

  footer.append(sectionLeft, sectionRight);
  divNote.append(footer);

  return listItem;
};
