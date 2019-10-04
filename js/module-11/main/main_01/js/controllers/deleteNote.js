refs.noteList.addEventListener('click', deleteNote);

function deleteNote({
  target,
}) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    const {
      id,
    } = li.dataset;
    li.remove();
    notepad.deleteNote(id);
  }
}
