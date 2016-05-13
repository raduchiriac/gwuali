import React from 'react';
import uuid from 'uuid';
import Note from './Note.jsx';
import {List, RaisedButton, SelectableContainerEnhance} from 'material-ui';

import NoteActions from '../actions/NoteAction';
import NoteStore from '../stores/NoteStore';

import connect from '../decorators/connect';


let SelectableList = SelectableContainerEnhance(List);

const styles = {
  exampleImageInput: {
    width: '100%',
    textAlign: 'right',
  },
};

@connect(NoteStore)
export default class NoteList extends React.Component {
  render() {
    const notes = this.props.notes;
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
    NoteActions.create({task: ''});
    // TODO: focus on this note
  }
  editNote(id, task) {
    NoteActions.update({id, task});
  }
  deleteNote(id) {
    NoteActions.delete(id);
  }
}
