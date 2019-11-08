'use es6';

import { createAction } from 'redux-actions';
import * as ActionTypes from './ActionTypes';

export const getMoviesError = createAction(ActionTypes.GET_MOVIES_ERROR);
export const getMoviesStart = createAction(ActionTypes.GET_MOVIES_START);
export const getMoviesSuccess = createAction(ActionTypes.GET_MOVIES_SUCCESS);
