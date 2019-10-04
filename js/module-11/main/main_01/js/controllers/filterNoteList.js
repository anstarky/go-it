refs.searchInput.addEventListener('input', filterNoteList);

function filterNoteList() {
  const query = refs.searchInput.value.toLowerCase();
  const filteredItems = notepad.filterNotesByQuery(query);
  renderNoteList(refs.noteList, filteredItems);
}
