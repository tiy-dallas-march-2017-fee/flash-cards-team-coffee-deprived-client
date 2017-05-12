import _ from 'lodash';
import React from 'react';
import constants from './constants.js';

const initialState = {
  currentCard: 0,
  showFront: true,
  correctCount: 0,
  incorrectCards: [],
  incorrectCount: 0,
  skippedCount: 0,
  cards: [],
};


const reducer = (state = initialState, action) => {
  const current = state.currentCard;
  const cards = state.cards;

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
      if(state.incorrectCards.indexOf(cards[current].id) < 0){
        increment = state.correctCount + 1;
      } else {
        var increment = state.correctCount;
      }
      return Object.assign({}, state, {
        currentCard: current + 1,
        correctCount: increment
      });
    case constants.QUIZ_CARD_INCORRECT:
      console.log(cards[current]);
      if(state.incorrectCards.indexOf(cards[current].id) < 0){
        state.incorrectCards.push(cards[current].id);
        var increment = state.incorrectCount + 1;
      } else {
        increment = state.incorrectCount;
      }

      console.log(cards[current].id)
      console.log(state.incorrectCards);
      console.log(increment);

      var incorrect = cards.splice(current, 1);
      var first = cards.slice(0, current + 2);
      var second = cards.slice(current + 2);
      var newSet = [...first, ...incorrect, ...second];



      return Object.assign({}, state, {
        cards: newSet,
        incorrectCount: increment
      });
    case constants.QUIZ_CARD_SKIP:
      return Object.assign({}, state, {
      currentCard: state.current + 1,
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
