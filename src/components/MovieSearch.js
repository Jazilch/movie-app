'use es6';

import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  line-height: 2rem;
  font-size: 18px;
  padding: 0 5px;
  :focus {
    outline: red auto 2px;
  }
`;

const MovieSearch = ({ searchTerm, setSearch }) => {
  return (
    <div>
      <form className="form">
        <SearchInput
          type={searchTerm}
          className="input"
          id="addInput"
          placeholder="Search movies..."
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </form>
    </div>
  );
};

export default MovieSearch;
