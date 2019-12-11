'use es6';

import React from 'react';
import styled from 'styled-components/macro';

const SearchContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
`;

const SearchEmptyState = () => {
  return (
    <SearchContentWrapper>
      <h3>No results</h3>
      <p>Try refining your search results</p>
    </SearchContentWrapper>
  );
};

export default SearchEmptyState;
