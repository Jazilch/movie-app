'use es6';

import React from 'react';
import styled from 'styled-components/macro';
import MovieSearchContainer from '../containers/MovieSearchContainer';
import MovieGenreFilter from './MovieGenreFilter';

const MovieListToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
  margin-bottom: 1rem;
  background-color: #494949;
`;

const MovieListToolbar = () => {
  return (
    <MovieListToolbarWrapper>
      <MovieGenreFilter />
      <MovieSearchContainer />
    </MovieListToolbarWrapper>
  );
};

export default MovieListToolbar;
