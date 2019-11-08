'use es6';

import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { getMovies } from '../actions/asyncActions/moviesAsyncAction';

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = {
  getMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
