import { PropsWithChildren } from 'react';
import Nav from '@components/nav';
import styled from 'styled-components';
import Banner from '@components/event/Banner';
import Footer from '@components/footer/Footer';
import Academy from '@components/list/Academy';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Nav />
      <Banner />
      <CotentBox>
        {/* <Academy /> */}
        <Content>{children}</Content>
      </CotentBox>
      <Footer />
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  max-width: 60rem;
  min-height: 100vh;
  margin: 0 auto;
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
