import {
  PRIORITY_TYPES
} from '../utils/const';
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
    if (note.priority in note) {
      this._notes.push(note);
    } else {
      note.priority = PRIORITY_TYPES.LOW;
      this._notes.push(note);
    }
    // return note;
    return new Promise((res, rej) => {
      const itemLocal = JSON.parse(localStorage.getItem("notes"));
      itemLocal.push(note);
      console.log(note);
      console.log(itemLocal);
      localStorage.setItem("notes", JSON.stringify(itemLocal));

      res(note);
    });

  }

  deleteNote(id) {
    this._notes.splice(this.findIndexNoteById(id), 1);
    // return this._notes;
    return new Promise((res, rej) => {
      const arrLocal = JSON.parse(localStorage.getItem("notes"));
      arrLocal.splice(arrLocal.indexOf(arrLocal.find(e => e.id === id)), 1);
      localStorage.setItem("notes", JSON.stringify(arrLocal));

      res([]);
    });

  }

  updateNoteContent(id, updatedContent) {
    const a = Object.assign(this.findNoteById(id), updatedContent);
    console.log(a);
    console.log(this._notes);
    // return this._notes;
    return new Promise((res, rej) => {
      const itemLocal = JSON.parse(localStorage.getItem("notes"));
      Object.assign(itemLocal, this._notes);
      localStorage.setItem("notes", JSON.stringify(this._notes));

      res(note);
    });

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

export default Notepad;