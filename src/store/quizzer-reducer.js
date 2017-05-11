import _ from 'lodash';
import React from 'react';
import constants from './constants.js';

const initialState = {
  currentCard: 0,
  showFront: true,
  correctCount: 0,
  incorrectCount: 0,
  skippedCount: 0,
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.START_QUIZ:
      // var shuffledCards = _.shuffle(action.set.cards.slice(0));
      // var sliceEnd = 10;
      // if (shuffledCards.length < 10) {
      //   sliceEnd = shuffledCards.length;
      // }
      // shuffledCards = shuffledCards.slice(0, sliceEnd);
      return Object.assign({}, state, {
        cards: action.set.cards,
        set: action.set,
        currentCard: 0,
        showFront: true,
        correctCount: 0,
        incorrectCount: 0,
        skippedCount: 0
      });
    case constants.QUIZ_CARD_CORRECT:
      return Object.assign({}, state, {
        currentCard: state.currentCard + 1,
        correctCount: state.correctCount + 1
      });
    case constants.QUIZ_CARD_INCORRECT:
      // console.log(state.currentCard);
      // console.log(state.cards.length);
      // console.log(state.cards);

      var incorrect = state.cards.splice(state.currentCard, 1);
      if(state.cards.length <= 3){
        var copy = state.cards.slice(state.currentCard);
        var newSet = [...copy, ...incorrect];
        console.log(newSet);

      } else {
        var first = state.cards.slice(0, state.currentCard + 2);
        var second = state.cards.slice(state.currentCard + 2);
        newSet = [...first, ...incorrect, ...second];
      }
      // console.log('beginning of copied array', first);
      // console.log('the rest of the copied array', second);
      // console.log('incorrect card being spliced', incorrect);
      return Object.assign({}, state, {
        cards: newSet,
        // currentCard: state.currentCard + 1,
        incorrectCount: state.incorrectCount + 1
      });
    case constants.QUIZ_CARD_SKIP:
      return Object.assign({}, state, {
      currentCard: state.currentCard + 1,
      skippedCount: state.skippedCount + 1
    });
    case constants.TOGGLE_CARD:
      return Object.assign({}, state, {
        showFront: state.showFront ? false : true
      });
    default:
      return state;
  }
};

module.exports = reducer;
