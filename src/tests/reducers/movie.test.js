/* eslint-disable no-undef */

'use es6';

import expect from 'expect';
import {
  GET_MOVIE_ERROR,
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS
} from '../../actions/ActionTypes';
import { getMovieMock } from '../mocks/getMovieMock';
import reducer from '../../reducers/movie';
import { AsyncDataDefaultState, AsyncDataStateKeys } from '../../Constants';

const { DATA, ERROR, LOADING } = AsyncDataStateKeys;

describe('movie reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, AsyncDataDefaultState)).toEqual(
      AsyncDataDefaultState
    );
  });

  it('should handle GET_MOVIE_ERROR', () => {
    const error = { success: false };
    const errorAction = {
      type: GET_MOVIE_ERROR,
      payload: error
    };
    expect(reducer(AsyncDataDefaultState, errorAction)).toEqual({
      [DATA]: null,
      [ERROR]: error,
      [LOADING]: false
    });
  });

  it('should handle GET_MOVIE_START', () => {
    const startAction = {
      type: GET_MOVIE_START
    };
    expect(reducer(AsyncDataDefaultState, startAction)).toEqual({
      [DATA]: null,
      [ERROR]: false,
      [LOADING]: true
    });
  });
  it('should handle GET_MOVIE_SUCCESS', () => {
    const successAction = {
      type: GET_MOVIE_SUCCESS,
      payload: getMovieMock.results
    };
    expect(reducer(AsyncDataDefaultState, successAction)).toEqual({
      [DATA]: getMovieMock.data,
      [ERROR]: false,
      [LOADING]: false
    });
  });
});
