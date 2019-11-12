import { getMoviesError, getMoviesStart, getMoviesSuccess } from '../movies';
import fetchMovies from '../../data/fetchMovies';

// eslint-disable-next-line import/prefer-default-export
export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesStart());

    return fetchMovies().then(
      result => dispatch(getMoviesSuccess(result.data)),
      error => {
        dispatch(getMoviesError(error));
        return dispatch(getMoviesError());
      }
    );
  };
};
