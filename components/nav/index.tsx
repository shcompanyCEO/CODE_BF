import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SignComponent from './SignComponent';

const Nav = () => {
  return (
    <NavLayout>
      <Container>
        <Logo />
        <SignComponent />
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
  height: 8rem;
`;
