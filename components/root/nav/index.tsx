import React from 'react';
import Logo from './Logo';
import CountryComponent from './CountryComponent';
import MemberShipMenu from './MemberShipMenu';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavLayout>
      <Container>
        <Logo />
        <CountryComponent />
        <MemberShipMenu />
      </Container>
    </NavLayout>
  );
};

export default Nav;

const NavLayout = styled.div`
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 1000;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;
