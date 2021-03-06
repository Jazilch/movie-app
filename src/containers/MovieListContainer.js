'use es6';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { getMovies } from '../actions/asyncActions/moviesAsyncAction';

const mapStateToProps = (state, { location: { search } }) => ({
  movies: state.movies,
  searchTerm: state.searchTerm,
  filterTerm: state.filterTerm,
  page: parseInt(search.split('=')[1], 10)
});

const mapDispatchToProps = {
  getMovies
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MovieList);
