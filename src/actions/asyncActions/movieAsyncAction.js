import { getMovieError, getMovieStart, getMovieSuccess } from '../movie';
import fetchMovie from '../../data/fetchMovie';

// eslint-disable-next-line import/prefer-default-export
export const getMovie = movieId => {
  return dispatch => {
    dispatch(getMovieStart());

    return fetchMovie(movieId).then(
      result => dispatch(getMovieSuccess(result)),
      error => {
        dispatch(getMovieError(error));
        return dispatch(getMovieError(error));
      }
    );
  };
};
