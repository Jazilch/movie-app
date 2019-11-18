'use es6';

import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';

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

const DefaultLoader = () => {
  return (
    <LoadingGrid>
      <ScaleLoader css={override} sizeUnit="px" size={150} color="red" />
    </LoadingGrid>
  );
};

export default DefaultLoader;
