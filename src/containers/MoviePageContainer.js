'use es6';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import MoviePage from '../components/MoviePage';
import { getMovie } from '../actions/asyncActions/movieAsyncAction';

const mapStateToProps = (state, { match: { params } }) => ({
  movieId: params.id,
  movie: state.movie
});

const mapDispatchToProps = {
  getMovie
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MoviePage);
