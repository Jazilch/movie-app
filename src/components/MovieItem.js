'use es6';

import React from 'react';
import styled from 'styled-components';

const MovieItemWrapper = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
`;

const MovieItem = ({ title, overview }) => {
  return (
    <MovieItemWrapper>
      <h1>{title}</h1>
      <p>{overview}</p>
    </MovieItemWrapper>
  );
};

export default MovieItem;
