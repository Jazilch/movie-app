/* eslint-disable no-undef */

'use es6';

import expect from 'expect';
import {
  GET_MOVIES_ERROR,
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS
} from '../../actions/ActionTypes';
import { getMoviesMock, getMoviesExpectedMock } from '../mocks/getMoviesMock';
import reducer from '../../reducers/movies';
import { AsyncDataDefaultState, AsyncDataStateKeys } from '../../Constants';

const { DATA, ERROR, LOADING } = AsyncDataStateKeys;

describe('movies reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, AsyncDataDefaultState)).toEqual(
      AsyncDataDefaultState
    );
  });

  it('should handle GET_MOVIES_ERROR', () => {
    const error = { success: false };
    const errorAction = {
      type: GET_MOVIES_ERROR,
      payload: error
    };
    expect(reducer(AsyncDataDefaultState, errorAction)).toEqual({
      [DATA]: null,
      [ERROR]: error,
      [LOADING]: false
    });
  });

  it('should handle GET_MOVIES_START', () => {
    const startAction = {
      type: GET_MOVIES_START
    };
    expect(reducer(AsyncDataDefaultState, startAction)).toEqual({
      [DATA]: null,
      [ERROR]: false,
      [LOADING]: true
    });
  });
  it('should handle GET_MOVIES_SUCCESS', () => {
    const successAction = {
      type: GET_MOVIES_SUCCESS,
      payload: getMoviesMock
    };
    expect(reducer(AsyncDataDefaultState, successAction)).toEqual({
      [DATA]: getMoviesExpectedMock.results,
      [ERROR]: false,
      [LOADING]: false
    });
  });
});
