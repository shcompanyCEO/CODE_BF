import { PropsWithChildren } from 'react';
import Nav from '@components/root/nav';
import Banner from '@components/event/Banner';
import Footer from '@components/root/footer/Footer';
import MenuBar from '@components/root/menubar';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const RootLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container>
      <Nav />
      {/* <Banner /> */}
      <MenuBar />
      {pathname === '/' && <Banner />}
      <ContentBox>
        <Content>{children}</Content>
      </ContentBox>
      <Footer />
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
