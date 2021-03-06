/* eslint-disable camelcase */

'use es6';

import React from 'react';
import styled from 'styled-components/macro';

const MovieItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  transform: sclae(1);
  transition: transform 0.4s;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;

const MovieItemImage = styled.img`
  width: 100%;
`;

const MovieItem = ({
  id,
  title,
  overview,
  poster_path,
  genres,
  showMoviePage
}) => {
  const imageURL = `http://image.tmdb.org/t/p/w342${poster_path}`;
  return (
    <MovieItemWrapper onClick={showMoviePage(id)}>
      <MovieItemImage src={imageURL} alt="movie" />
      <h1>{title}</h1>
      <p>{overview}</p>
      <span>{genres.join(', ')}</span>
    </MovieItemWrapper>
  );
};

export default MovieItem;
