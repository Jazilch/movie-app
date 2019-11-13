'use es6';

import { createAction } from 'redux-actions';
import * as ActionTypes from './ActionTypes';

export const getMovieError = createAction(
  ActionTypes.GET_MOVIE_ERROR,
  error => error
);
export const getMovieStart = createAction(ActionTypes.GET_MOVIE_START);
export const getMovieSuccess = createAction(
  ActionTypes.GET_MOVIE_SUCCESS,
  ({ data }) => data
);
