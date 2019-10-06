import * as api from '../services/api';

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get() {
    return this._notes;
  }

  getNotes() {
    return api.getNotes().then(notes => {
      this._notes = notes;
      return this._notes;
    });
  }

  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }

  saveNote(note) {
    return api.saveNotes(note).then(note => {
      this._notes.push(note);
      return note;
    });
  }

  deleteNote(id) {
    return api.deleteNotes(id).then(() => {
      this.getNotes();
    });
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    Object.assign(note, updatedContent);
    return api.updateNotes(id, note);
  }

  filterNotesByQuery(query) {
    return this._notes.filter(
      ({
        title,
        body
      }) =>
      title.toLowerCase().includes(query.toLowerCase()) ||
      body.toLowerCase().includes(query.toLowerCase())
    );
  }

  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
    return this._notes;
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }
}

export default Notepad;