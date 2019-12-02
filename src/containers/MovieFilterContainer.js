'use es6';

import { connect } from 'react-redux';
import MovieGenreFilter from '../components/MovieGenreFilter';
import { setFilter } from '../actions/setFilter';

const mapStateToProps = state => ({
  filterTerm: state.filterTerm
});

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGenreFilter);
