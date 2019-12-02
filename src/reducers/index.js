import { combineReducers } from 'redux';
import movie from './movie';
import movies from './movies';
import searchTerm from './searchTerm';
import filterTerm from './filterTerm';

export default combineReducers({
  movie,
  movies,
  searchTerm,
  filterTerm
});
