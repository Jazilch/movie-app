import { combineReducers } from 'redux';
import movie from './movie';
import movies from './movies';

export default combineReducers({
  movie,
  movies
});
