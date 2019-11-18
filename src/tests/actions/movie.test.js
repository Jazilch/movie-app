/* eslint-disable no-undef */

'use es6';

import {
  getMovieError,
  getMovieStart,
  getMovieSuccess
} from '../../actions/movie';

describe('action creator test', () => {
  it('should setup get movies error action object', () => {
    const action = getMovieError();
    expect(action).toEqual({
      type: 'GET_MOVIE_ERROR'
    });
  });

  it('should setup movies start action object', () => {
    const action = getMovieStart();
    expect(action).toEqual({
      type: 'GET_MOVIE_START'
    });
  });

  it('should setup movies success action object', () => {
    const result = { data: {} };
    const action = getMovieSuccess(result);
    expect(action).toEqual({
      type: 'GET_MOVIE_SUCCESS',
      payload: {}
    });
  });
});
