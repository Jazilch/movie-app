'use es6';

import React from 'react';
import styled from 'styled-components/macro';
import { genres } from '../data/genres';

const StyledSelect = styled.select`
  height: 36px;
  line-height: 2rem;
  font-size: 18px;
  color: #808080;
`;

const MovieGenreFilter = ({ filterTerm, setFilter }) => {
  return (
    <form method="post">
      <StyledSelect
        name="Movie Genre Filter"
        value={filterTerm}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        {genres.map(genre => {
          return <option value={genre.name}>{genre.name}</option>;
        })}
      </StyledSelect>
    </form>
  );
};

export default MovieGenreFilter;
