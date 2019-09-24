class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    const resultNotes = [...this._notes];
    return resultNotes;
  }

  findNoteById(id) {
    return this._notes.find(e => e.id === id);
  }

  findIndexNoteById(id) {
    return this._notes.findIndex(e => e.id === id);
  }

  saveNote(note) {
    this._notes.push(note);
    return note;
  }

  deleteNote(id) {
    this._notes.splice(this.findIndexNoteById(id), 1);
    return this._notes;
  }

  updateNoteContent(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
    return this._notes;
  }

  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
    return this._notes;
  }

  filterNotesByQuery(query) {
    const newArray = [];
    for (let i = 0; i < this._notes.length; i += 1) {
      const titleLower = this._notes[i].title.toLowerCase();
      const bodyLower = this._notes[i].body.toLowerCase();
      if (titleLower.includes(query) || bodyLower.includes(query)) {
        newArray.push(this._notes[i]);
      }
    }
    return newArray;
  }

  filterNotesByPriority(priority) {
    const newArr = [];
    for (const obj of this._notes) {
      if (obj.priority === priority) {
        newArr.push(obj);
      }
    }
    return newArr;
  }
}
