function renderNoteList(noteList, data) {
  refs.noteList.innerHTML = '';
  refs.noteList.append(...data.map(item => createListItem(item)));
}
