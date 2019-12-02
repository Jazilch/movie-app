/* eslint-disable no-undef */

'use es6';

import { setFilter } from '../../actions/setFilter';

describe('setFilter action creator test', () => {
  it('should setup setSearch action object', () => {
    const action = setFilter();
    expect(action).toEqual({
      type: 'SET_FILTER'
    });
  });
});
