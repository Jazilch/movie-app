'use es6';

import React from 'react';
import styled from 'styled-components/macro';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>
      Created with{' '}
      <span aria-label="heart" role="img">
        ❤️
      </span>{' '}
      by James Zilch
    </p>
  </FooterWrapper>
);

export default Footer;
