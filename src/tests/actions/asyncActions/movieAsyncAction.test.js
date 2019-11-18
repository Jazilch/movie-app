/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import {
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS
} from '../../../actions/ActionTypes';
import { getMovie } from '../../../actions/asyncActions/movieAsyncAction';
import { getMovieMock } from '../../mocks/getMovieMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getPosts actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates GET_MOVIE_SUCCESS after successfuly fetching a movie by id', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getMovieMock
      });
    });

    const expectedActions = [
      { type: GET_MOVIE_START },
      { type: GET_MOVIE_SUCCESS, payload: getMovieMock }
    ];

    const store = mockStore({
      movie: {
        data: [],
        error: false,
        loading: false
      }
    });

    return store.dispatch(getMovie()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
