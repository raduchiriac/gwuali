import React from 'react';
import uuid from 'uuid';
import Note from './Note.jsx';
import {List, RaisedButton, SelectableContainerEnhance} from 'material-ui';

let SelectableList = SelectableContainerEnhance(List);

const styles = {
  exampleImageInput: {
    width: '100%',
    textAlign: 'right',
  },
};

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
      notes: [{
        id: uuid.v4(),
        task: 'Publish Electron'
      }, {
        id: uuid.v4(),
        task: 'Learn React'
      }, {
        id: uuid.v4(),
        task: 'What is Flux?'
      }]
    };
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.findNote = this.findNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  handleUpdateSelectedIndex(e, index) {
    this.setState({
      selectedIndex: index,
    });
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <List>
          {notes.map(this.renderNote.bind(this))}
        </List>
        <RaisedButton
          label="Add"
          hoverColor="#DEDEDE"
          secondary={true}
          style={styles.exampleImageInput}
          onClick={this.addNote}
        />
      </div>
    )
  }
  renderNote(note) {
    return (
      <Note
        task={note.task}
        key={`note${note.id}`}
        onEdit={this.editNote.bind(null, note.id)}
        onDelete={this.deleteNote.bind(null, note.id)}
      />
    );
  }
  addNote() {
    this.setState({
      notes: [...this.state.notes, {id: uuid.v4(), task: ''}]
    });
  }
  editNote(noteId, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(noteId);
    if(noteIndex < 0) {
      return;
    }
    notes[noteIndex].task = task;
    this.setState({notes});
  }
  deleteNote(id) {
    const notes = this.state.notes;
    const noteIndex = this.findNote(id);
    if(noteIndex < 0) {
      return;
    }
    this.setState({
      notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    });
  }
  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);
    if(noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }
    return noteIndex;
  }
}
