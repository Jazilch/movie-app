'use es6';

import React, { Component } from 'react';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMovie: ''
    };
  }

  componentDidMount() {
    const { movieId } = this.props;
    this.setState({
      displayMovie: movieId
    });
  }

  render() {
    const { displayMovie } = this.state;
    return (
      <div className="movie-page">
        <p>{displayMovie}</p>
      </div>
    );
  }
}

export default MoviePage;
