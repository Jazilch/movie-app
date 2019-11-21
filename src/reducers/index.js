import { combineReducers } from 'redux';
import movie from './movie';
import movies from './movies';
import searchTerm from './searchTerm';

export default combineReducers({
  movie,
  movies,
  searchTerm
});
