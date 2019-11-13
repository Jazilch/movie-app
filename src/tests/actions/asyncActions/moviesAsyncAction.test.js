/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS
} from '../../../actions/ActionTypes';
import { getMovies } from '../../../actions/asyncActions/moviesAsyncAction';
import { getMoviesMock } from '../../mocks/getMoviesMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getPosts actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates GET_MOVIES_SUCCESS after successfuly fetching movies', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getMoviesMock
      });
    });

    const expectedActions = [
      { type: GET_MOVIES_START },
      { type: GET_MOVIES_SUCCESS, payload: getMoviesMock }
    ];

    const store = mockStore({
      movies: {
        data: [],
        error: false,
        loading: false
      }
    });

    return store.dispatch(getMovies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
