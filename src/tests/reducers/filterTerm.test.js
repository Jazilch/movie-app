/* eslint-disable no-undef */

'use es6';

import reducer from '../../reducers/filterTerm';

describe('search term reducer', () => {
  it('should handle SET_FILTER', () => {
    const setFilterAction = {
      type: 'SET_FILTER',
      searchTerm: 'horror'
    };
    const expectedState = 'horror';
    expect(reducer(undefined, setFilterAction)).toEqual(expectedState);
  });
});
