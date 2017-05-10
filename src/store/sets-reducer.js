import constants from './constants.js';

const initialState = {
  list: [],
  sortSetsBy: 'name',
  className: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOAD_SETS:
      return Object.assign({}, state, { list: action.sets });
    case constants.CHANGE_SORT:
      let copy = state.list.slice();
      if (action.sort === 'name') {
        copy.sort((a, b) => { return (
          a.name > b.name,
          Object.assign({}, state, {className: "sorting by-card-count"})
        )
      });
      }
      else {
        copy.sort((a, b) => { return (
          a.cards.length < b.cards.length,
          Object.assign({}, state, {className: "sorting by-card-count" })
        );
        });
      }

      return Object.assign({}, state, { list: copy, sortSetsBy: action.sort});

      console.log(state.className);
    default:
      return state;
  }
}

module.exports = reducer
