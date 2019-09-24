function renderNoteList(noteList, data) {
  const listItems = noteList.cloneNode(false);
  listItems.append(...data.map(item => createListItem(item)));

  noteList.replaceWith(listItems);
}
