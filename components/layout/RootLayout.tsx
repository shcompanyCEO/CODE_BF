import { PropsWithChildren } from 'react';
import Nav from '@components/nav';
import styled from 'styled-components';
import Banner from '@components/event/Banner';
import Footer from '@components/footer/Footer';

const RootLayout = ({ children }: PropsWithChildren) => {
  console.log('sean children', children);
  return (
    <Container>
      <Nav />
      <CotentBox>
        <Banner />
        <Content>{children}</Content>
      </CotentBox>
      <Footer />
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  min-height: 100vh;
  height: auto;
  border: 1px solid red;
  padding: 0 2rem;
`;

const CotentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
