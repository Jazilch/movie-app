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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class MovieList extends Component {
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  render() {
    const { movies } = this.props;
    if (!movies.DATA)
      return (
        <ScaleLoader css={override} sizeUnit="px" size={150} color="#123abc" />
      );
    return (
      <MovieListGrid>
        {movies.DATA.data.results.map(({ id, title, overview }) => {
          return <MovieItem key={id} title={title} overview={overview} />;
        })}
      </MovieListGrid>
    );
  }
}

export default MovieList;
