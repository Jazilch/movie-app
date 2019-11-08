'use es6';

import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  render() {
    const { movies } = this.props;
    if (!movies.DATA) return null;
    return (
      <div className="movie-grid">
        {movies.DATA.data.results.map(({ id, title, overview }) => {
          return <MovieItem key={id} title={title} overview={overview} />;
        })}
      </div>
    );
  }
}

export default MovieList;
