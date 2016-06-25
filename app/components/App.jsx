import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import uuid from 'uuid';

import NoteList from './NoteList.jsx';
import db from '../libs/pouchdb';

export default class App extends React.Component {
  constructor(props){
    super(props);
    window.PouchDB = db;

    PouchDB.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
    });

    // let notes = [{
    //   _id: uuid.v4(),
    //   task: 'Publish Electron'
    // }, {
    //   _id: uuid.v4(),
    //   task: 'Learn React'
    // }, {
    //   _id: uuid.v4(),
    //   task: 'What is Flux?'
    // }];
    // notes.forEach(function(note){
    //   db.put(note);
    // });
  }

  render() {
    return (
      <MuiThemeProvider>
        <NoteList key='xxa' />
      </MuiThemeProvider>
    );
  }
}
