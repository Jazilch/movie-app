'use es6';

import { connect } from 'react-redux';
import MovieSearch from '../components/MovieSearch';
import { setSearch } from '../actions/setSearch';

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = {
  setSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
