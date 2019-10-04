import {
  notepad
} from '../main_01';


function editNote(event) {
  event.preventDefault();
  const {
    target
  } = event;

  if (
    target.dataset.action === 'edit-note' ||
    target.parentNode.dataset.action === 'edit-note') {

    const li = target.closest('.note-list__item');
    const {
      id
    } = li.dataset;

    const note = notepad.findNoteById(id);

    const title = li.querySelector('.note__title');
    const body = li.querySelector('.note__body');

    if (!target.classList.contains('active')) {
      target.classList.add('active');

      title.setAttribute('contenteditable', true);
      body.setAttribute('contenteditable', true);

      title.style.color = '#fff';
      body.style.color = '#fff';

      title.style.backgroundColor = '#2196F3';
      body.style.backgroundColor = '#2196F3';

      target.style.backgroundColor = '#2196F3';

      note.title = title.textContent;
      note.body = body.textContent;

    } else {
      target.classList.remove('active');
      title.setAttribute('contenteditable', false);
      body.setAttribute('contenteditable', false);

      title.style.color = '#000';
      body.style.color = '#000';

      title.style.backgroundColor = '#fff';
      body.style.backgroundColor = '#fff';

      target.style.backgroundColor = 'transparent';

      notepad.updateNoteContent(id, {
        title: note.title
      });
      notepad.updateNoteContent(id, {
        body: note.body
      });

    }

  }
}

export default editNote;