'use es6';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import MoviePage from '../components/MoviePage';

const mapStateToProps = (state, { match: { params } }) => ({
  movieId: params.id
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(MoviePage);
