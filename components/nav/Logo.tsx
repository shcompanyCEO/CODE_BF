import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoLayout>
      <LogoText>LUFILE</LogoText>
    </LogoLayout>
  );
};

export default Logo;

const LogoLayout = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 80%;
`;
const LogoText = styled.div`
  font-size: 3rem;
`;
