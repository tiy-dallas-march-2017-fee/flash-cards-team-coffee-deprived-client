import React from 'react';
import UserData from './../UserData.js';
import { Link } from 'react-router-dom';

class SetEditorComponent extends React.Component {

  submitSet(evt) {
    evt.preventDefault();
    const cb = () => this.props.history.goBack();
    UserData.createSet(this.nameInput.value, this.descriptionInput.value, cb);
  }

  render() {
    return <div className="set-editor">
      <h2>Set Editor</h2>

      <form onSubmit={(evt) => { this.submitSet(evt); }}>

        <input placeholder="name" ref={(input) => { this.nameInput = input; }} />

        <textarea placeholder="description" ref={(input) => { this.descriptionInput = input; }} ></textarea>

        <div>
          <button style={{marginTop: "10px", marginRight: "10px"}}>Save</button>
        </div>

      </form>
    </div>
  }

}

module.exports = SetEditorComponent;
