import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteAction';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [];
  }
  create(note) {
    this.setState({
      notes: [...this.notes, { id: uuid.v4(), task: note.task }]
    });
  }
  update({ id, task }) {
    let notes = this.notes;
    const noteIndex = this.findNote(id);
    if (noteIndex < 0) {
      return;
    }
    notes[noteIndex].task = task;
    this.setState({ notes });
  }
  delete(id) {
    const notes = this.notes;
    const noteIndex = this.findNote(id);
    if (noteIndex < 0) {
      return;
    }
    this.setState({
      notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    });
  }
  findNote(id) {
    const notes = this.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex < 0) {
      console.log('Failed to find note', notes, id);
    }
    return noteIndex;
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
