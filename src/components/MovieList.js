/* eslint-disable camelcase */

'use es6';

import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';
import MovieItem from './MovieItem';

const MovieListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const LoadingGrid = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const override = css`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

class MovieList extends Component {
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  showMoviePage = id => () => {
    const { history } = this.props;
    history.push(`/movies/${id}`);
  };

  render() {
    const { movies } = this.props;
    if (!movies.data)
      return (
        <LoadingGrid>
          <ScaleLoader css={override} sizeUnit="px" size={150} color="red" />
        </LoadingGrid>
      );
    return (
      <MovieListGrid>
        {movies.data.map(({ id, title, overview, poster_path }) => {
          return (
            <MovieItem
              key={id}
              id={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
              showMoviePage={this.showMoviePage}
            />
          );
        })}
      </MovieListGrid>
    );
  }
}

export default MovieList;
