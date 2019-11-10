'use es6';

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.div`
  color: red;
  font-weight: 700;
  font-size: 42px;
  letter-spacing: 1px;
  font-family: 'Bangers', cursive;
`;

const Nav = styled.nav`
  margin: 0 10px;
  color: #fff;
`;

const NavItem = styled.a`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>Movie App</Logo>
    <Nav>
      <NavItem href="">Movies</NavItem>
      <NavItem href="">Shows</NavItem>
    </Nav>
  </HeaderWrapper>
);

export default Header;
