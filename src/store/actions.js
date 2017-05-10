import constants from './constants.js';

const LOAD_SETS = { type: constants.LOAD_SETS };
const CHANGE_SORT = { type: constants.CHANGE_SORT };
const SHUFFLE_CARDS = { type: constants.SHUFFLE_CARDS };
const START_QUIZ = { type: constants.START_QUIZ };
const QUIZ_CARD_CORRECT = { type: constants.QUIZ_CARD_CORRECT };
const QUIZ_CARD_INCORRECT = { type: constants.QUIZ_CARD_INCORRECT };
<<<<<<< HEAD
const QUIZ_CARD_SKIP = { type:
constants.QUIZ_CARD_SKIP };
=======
const TOGGLE_CARD= { type: constants.TOGGLE_CARD };
>>>>>>> f866f915080cb96578d34ba318f246a46b06d3d7

const actions = {
  LOAD_SETS: LOAD_SETS,
  CHANGE_SORT: CHANGE_SORT,
  SHUFFLE_CARDS: SHUFFLE_CARDS,
  START_QUIZ: START_QUIZ,
  QUIZ_CARD_CORRECT: QUIZ_CARD_CORRECT,
  QUIZ_CARD_INCORRECT: QUIZ_CARD_INCORRECT,
<<<<<<< HEAD
  QUIZ_CARD_SKIP: QUIZ_CARD_SKIP
=======
  TOGGLE_CARD: TOGGLE_CARD
>>>>>>> f866f915080cb96578d34ba318f246a46b06d3d7
};

module.exports = actions;
