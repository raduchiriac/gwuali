import React from 'react';
import AltContainer from 'alt-container';
import uuid from 'uuid';
import Note from './Note.jsx';
import {List, RaisedButton, MakeSelectable} from 'material-ui';
import {grey100} from 'material-ui/styles/colors';

import NoteActions from '../actions/NoteAction';
import NoteStore from '../stores/NoteStore';

import connect from '../decorators/connect';

let SelectableList = MakeSelectable(List);

const styles = {
  list: {
    background: `${grey100}`,
    borderRadius: '6px 6px 0 0'
  },
  exampleImageInput: {
    width: '100%',
    textAlign: 'right',
  },
};

@connect(NoteStore)
export default class NoteList extends React.Component {
  render() {
    return (
      <div>
        <AltContainer
          stores={[NoteStore]}
          >
          <List style={styles.list}>
            {NoteStore.getState().notes.map(this.renderNote.bind(this))}
          </List>
        </AltContainer>
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
