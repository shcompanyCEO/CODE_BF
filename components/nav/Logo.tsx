import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoLayout>
      <LogoText>BeautyQue</LogoText>
    </LogoLayout>
  );
};

export default Logo;

const LogoLayout = styled.div`
  display: flex;
  align-items: center;
`;
const LogoText = styled.div`
  font-size: 3rem;
`;
