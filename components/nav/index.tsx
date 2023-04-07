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
  width: 100%;
  position: sticky;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
`;
