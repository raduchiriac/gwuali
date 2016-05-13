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
      !!result.total_rows || console.log('a');
    });

    let notes = [{
      _id: uuid.v4(),
      task: 'Publish Electron'
    }, {
      _id: uuid.v4(),
      task: 'Learn React'
    }, {
      _id: uuid.v4(),
      task: 'What is Flux?'
    }];
    // notes.forEach(function(note){
    //   db.put(note);
    // });
  }

  render() {
    return (
      <div>
        <NoteList id='xxa' />
      </div>
    );
  }
}
