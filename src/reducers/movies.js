import * as ActionTypes from '../actions/ActionTypes';
import { AsyncDataDefaultState, AsyncDataStateKeys } from '../Constants';

const { DATA, ERROR, LOADING } = AsyncDataStateKeys;

export default function(state = AsyncDataDefaultState, action) {
  switch (action.type) {
    case ActionTypes.GET_MOVIES_ERROR:
      return {
        [DATA]: null,
        [ERROR]: action.payload,
        [LOADING]: false
      };
    case ActionTypes.GET_MOVIES_START:
      return {
        [DATA]: null,
        [ERROR]: false,
        [LOADING]: true
      };
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        [DATA]: action.payload.results,
        [ERROR]: false,
        [LOADING]: false
      };
    default:
      return state;
  }
}
