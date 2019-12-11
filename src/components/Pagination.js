'use es6';

import React from 'react';
import styled from 'styled-components/macro';
import { createPageCountArray } from '../utils/createPageCountArray';

const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const PaginationItem = styled.li`
  padding: 3px 8px;
  margin: 0 4px;
  border-radius: 5px;
  cursor: pointer;
  border: ${props => (props.active ? '1px solid #1890ff' : '1px solid #ccc')};
  color: ${props => (props.active ? '#1890ff' : '#808080')};
`;

const Pagination = ({ page, pageCount, history }) => {
  const pageCountArray = createPageCountArray(pageCount);
  return (
    <PaginationWrapper>
      {pageCountArray.map(pageNum => {
        return (
          <PaginationItem
            value={pageNum}
            active={page === pageNum}
            onClick={({ target: { value } }) =>
              history.push({ search: `?page=${value}` })
            }
          >
            {pageNum}
          </PaginationItem>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;
