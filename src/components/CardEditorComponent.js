import React from 'react';
import UserData from './../UserData.js';

class CardEditorComponent extends React.Component {

  saveCard(evt) {
    console.log('saving card data');
    evt.preventDefault();
    UserData.addCardToSet(this.props.setId, this.frontInput.value, this.backInput.value);
    this.frontInput.value="";
    this.backInput.value="";
  }

  submitCards(evt){
    console.log('submitting card data');
    evt.preventDefault();
    var cb = () => {
      this.props.history.goBack();
    }
    UserData.submitCardsToSet(cb);
  }

  render() {
    return <div className="card-editor">
      <h2>The Card Editor</h2>
      <form>
        <input placeholder="front" ref={(input) => {this.frontInput = input; }} />
        <input placeholder="back" ref={(input) => {this.backInput = input; }} />
        <button onClick={(evt) => {this.saveCard(evt);}}>Save Card</button>
        <button onClick={(evt) => {this.submitCards(evt);}}>Submit Cards</button>
      </form>
    </div>
  }
}

module.exports = CardEditorComponent;
