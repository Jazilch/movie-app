'use es6';

import * as ActionTypes from '../actions/ActionTypes';

export default function filterTerm(state = 'All', action) {
  switch (action.type) {
    case ActionTypes.SET_FILTER:
      return action.searchTerm;
    default:
      return state;
  }
}
