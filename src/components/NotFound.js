'use es6';

import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ContentWrapper = styled.div``;

const Title = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
`;

const SubTitle = styled.span`
  color: #fff;
  font-weight: 300;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <img
        src="https://cdn2.hubspot.net/hubfs/2676636/Awesome%20Logs%20Files/Hanks-640x359.jpg"
        alt="not-found"
        width="500"
      />
      <ContentWrapper>
        <Title>Awww... Dont cry.</Title>
        <br />
        <SubTitle>Its only a 404 Error</SubTitle>
      </ContentWrapper>
    </NotFoundWrapper>
  );
};

export default NotFound;
