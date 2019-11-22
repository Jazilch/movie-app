/* eslint-disable no-undef */

'use es6';

import { setSearch } from '../../actions/setSearch';

describe('setSearch action creator test', () => {
  it('should setup setSearch action object', () => {
    const action = setSearch();
    expect(action).toEqual({
      type: 'SET_SEARCH'
    });
  });
});
