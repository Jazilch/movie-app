/* eslint-disable import/prefer-default-export */

'use es6';

import * as ActionTypes from '../actions/ActionTypes';

export default function searchTerm(state = '', action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return action.searchTerm;
    default:
      return state;
  }
}
