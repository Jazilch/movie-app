/* eslint-disable no-undef */

'use es6';

import {
  getMoviesError,
  getMoviesStart,
  getMoviesSuccess
} from '../../actions/movies';

describe('action creator test', () => {
  it('should setup get movies error action object', () => {
    const action = getMoviesError();
    expect(action).toEqual({
      type: 'GET_MOVIES_ERROR'
    });
  });

  it('should setup movies start action object', () => {
    const action = getMoviesStart();
    expect(action).toEqual({
      type: 'GET_MOVIES_START'
    });
  });

  it('should setup movies success action object', () => {
    const result = {};
    const action = getMoviesSuccess(result);
    expect(action).toEqual({
      type: 'GET_MOVIES_SUCCESS',
      payload: result
    });
  });
});
