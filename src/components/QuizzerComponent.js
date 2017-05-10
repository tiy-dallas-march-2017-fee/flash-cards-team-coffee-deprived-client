import React from 'react';
import UserData from './../UserData.js';
import QuizSummaryComponent from './QuizSummaryComponent.js';
import { store, actions } from './../store/store.js';

class QuizzerComponent extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => this.setState(store.getState()));

    var cb = (set) => {
      const action = Object.assign({}, actions.START_QUIZ, { set: set });
      store.dispatch(action);
    };

    UserData.getSet(this.props.setId, cb);
  }

  componentWillUnmount() {
    this.unsub();
  }

  cardClicked() {
    var copiedState = Object.assign({}, this.state);
    copiedState.showFront = !copiedState.showFront;

    this.setState(copiedState);
  }

  markCorrect() {

    var card = this.state.quizzer.cards[this.state.quizzer.currentCard];
    card.correctCount += 1;
    UserData.incrementCorrectCountOnCard(this.props.setId, card.id, () => {});

    store.dispatch(actions.QUIZ_CARD_CORRECT);
  }

  markIncorrect() {
    var card = this.state.quizzer.cards[this.state.quizzer.currentCard];
    card.incorrectCount += 1;
    UserData.incrementIncorrectCountOnCard(this.props.setId, card.id, () => {});

    store.dispatch(actions.QUIZ_CARD_INCORRECT);
  }

  skip() {
    var card =
    this.state.quizzer.cards[this.state.quizzer.currentCard];
    card.skippedCount += 1;
    UserData.incrementSkippedCountOnCard(this.props.setId, card.id, () => {});
    
    store.dispatch(actions.QUIZ_CARD_SKIP);
  }

  backToSetList() {
    this.props.history.push('/');
  }

  render() {
    var cardShower;
    var cardNavigation;
    var summary;
    var summaryNavigation;

    if (this.state.quizzer.cards !== undefined && this.state.quizzer.currentCard !== this.state.quizzer.cards.length) {
      var currentCard = this.state.quizzer.cards[this.state.quizzer.currentCard];
      var textToShow = this.state.quizzer.showFront ? currentCard.front: currentCard.back;

      cardShower = <div>
        <div>Card count: {this.state.quizzer.cards.length}</div>
        <div
          className="card"
          onClick={(evt) => { this.cardClicked(evt); }}>
          {textToShow}</div>
      </div>


      cardNavigation = <div className="card-navigation">
        <div className="correct" onClick={() => { this.markCorrect();}}>Correct</div>
        <div className="incorrect" onClick={() => {this.markIncorrect();}}>Incorrect</div>
        <div className="skip" onClick={() => {this.skip();}}>Skip</div>

      </div>;
    }
    else {
      summary = <QuizSummaryComponent
        correct={this.state.quizzer.correctCount}
        incorrect={this.state.quizzer.incorrectCount}
        skipped={this.state.quizzer.skippedCount} />

      summaryNavigation = <div className="summary-choices">
          <div>Quiz again</div>
          <div onClick={() => this.backToSetList()}>Back to set list</div>
        </div>;
    }

    return <div className="quizzer">
      <h2>The Quizzer</h2>

      {summary}
      {summaryNavigation}
      {cardShower}
      {cardNavigation}
    </div>
  }

}

module.exports = QuizzerComponent;
