'use es6';

import React, { Component } from 'react';

class MoviePage extends Component {
  componentDidMount() {
    const { movieId, getMovie } = this.props;
    getMovie(movieId);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-page">
        <p>{movie.data ? movie.data.title : 'Loading...'}</p>
      </div>
    );
  }
}

export default MoviePage;
