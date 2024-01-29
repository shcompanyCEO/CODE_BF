import React from 'react';
import Category from '@components/atom/Category';
import RootLayout from '@components/layout/RootLayout';
import { Button } from '@mui/material';
import styled from 'styled-components';

const HairPage = () => {
  return (
    <RootLayout>
      <CategoryContainer>
        <Button className="categoryBtn">
          <Category menu={'cut'} fontSize={'2rem'} />
        </Button>
        <Button className="categoryBtn">
          <Category menu={'perm'} fontSize={'2rem'} />
        </Button>
        <Button className="categoryBtn">
          <Category menu={'color'} fontSize={'2rem'} />
        </Button>
        <Button className="categoryBtn">
          <Category menu={'All'} fontSize={'2rem'} />
        </Button>
      </CategoryContainer>
      <LangthCheckingContainer>
        <Button className="langthBtn">
          <Category menu={'Shot'} fontSize={'1.5rem'} />
        </Button>
        <Button className="langthBtn">
          <Category menu={'Bob'} fontSize={'1.5rem'} />
        </Button>
        <Button className="langthBtn">
          <Category menu={'Medium'} fontSize={'1.5rem'} />
        </Button>
        <Button className="langthBtn">
          <Category menu={'Long'} fontSize={'1.5rem'} />
        </Button>
      </LangthCheckingContainer>
    </RootLayout>
  );
};

export default HairPage;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  .categoryBtn {
    color: #4e4e4e;
    font-size: large;
  }
`;
const LangthCheckingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 10rem;
  width: 100%;
  .langthBtn {
    color: #4e4e4e;
    font-size: 1rem;
  }
`;
