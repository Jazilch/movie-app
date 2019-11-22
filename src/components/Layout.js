'use es6';

import React from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  align-items: center;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 100px 1fr 80px;
  max-width: 1020px;
  width: 90%;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
