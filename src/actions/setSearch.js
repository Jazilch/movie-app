/* eslint-disable import/prefer-default-export */

'use es6';

import * as ActionTypes from './ActionTypes';

export const setSearch = searchTerm => {
  return {
    type: ActionTypes.SET_SEARCH,
    searchTerm
  };
};
