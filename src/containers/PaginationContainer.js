'use es6';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Pagination from '../components/Pagination';

const mapStateToProps = (state, { location: { search } }) => ({
  page: parseInt(search.split('=')[1], 10)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(Pagination);
