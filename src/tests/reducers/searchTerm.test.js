/* eslint-disable no-undef */

'use es6';

import reducer from '../../reducers/searchTerm';

describe('search term reducer', () => {
  it('should handle SET_SEARCH', () => {
    const setSearchAction = {
      type: 'SET_SEARCH',
      searchTerm: 'hello'
    };
    const expectedState = 'hello';
    expect(reducer(undefined, setSearchAction)).toEqual(expectedState);
  });
});
