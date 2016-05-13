import React from 'react';
import {ListItem, TextField, IconButton, FontIcon, SvgIcon} from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

const styles = {
  noteEdit: {
    paddingLeft: '16px',
    width: 'calc(100% - 48px)',
  },
  note: {
    minHeight: '3em'
  },
  deleteNoteIco: {
    position: 'absolute',
    right: '0',
    top: '0',
    color:'black'
  }
};

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderTask = this.renderTask.bind(this);
  }
  renderEdit() {
    return (
      <TextField
        hintText="I need to..."
        autoFocus={true}
        style={styles.noteEdit}
        multiLine={true}
        rowsMax={3}
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />);
  }
  renderTask() {
    return (
      <div>
        <ListItem
          // onMouseEnter=""
          // onMouseLeave=""
          secondaryText=""
          style={styles.note}
          onClick={this.edit}
          primaryText={this.props.task}>

          {this.props.onDelete ? this.renderDelete() : null}
        </ListItem>
      </div>
    );
  }
  edit() {
    this.setState({
      editing: true
    });
  }
  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  finishEdit(e) {
    this.props.onEdit(e.target.value);
    this.setState({
      editing: false
    });
  }
  renderDelete() {
    return (
      <IconButton
        style={styles.deleteNoteIco}
        onClick={this.props.onDelete}>
        <FontIcon hoverColor={Colors.red500} className="material-icons">delete</FontIcon>
      </IconButton>
    )
  }
  render() {
    return (
      <div>
        {this.state.editing ? this.renderEdit() : this.renderTask()}
      </div>
    );
  }
}
