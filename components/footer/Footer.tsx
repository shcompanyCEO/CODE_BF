import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import RootLayout from '@components/layout/RootLayout';

const Footer = () => {
  const router = useRouter();

  const routerPage = (page: string) => {
    if (page === 'home') {
      router.push('/');
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <FooterLayout>
      <MenuContainer>
        <MenuBar
          onClick={() => {
            routerPage('home');
          }}
        >
          <Image src={'/images/home.svg'} alt={'home'} width={15} height={15} />
          <MenuBarText>홈</MenuBarText>
        </MenuBar>
        <MenuBar
          onClick={() => {
            routerPage('styleMenu');
          }}
        >
          <Image src={'/images/book.svg'} alt={'styleBook'} width={15} height={15} />
          <MenuBarText>style book</MenuBarText>
        </MenuBar>
        <MenuBar>
          <Image src={'/images/market.svg'} alt={'search'} width={15} height={15} />
          <MenuBarText>마켓</MenuBarText>
        </MenuBar>
        <MenuBar
          onClick={() => {
            routerPage('design');
          }}
        >
          <Image src={'/images/saveImg.png'} alt={'myPick'} width={15} height={15} />
          <MenuBarText>디자인 Pick</MenuBarText>
        </MenuBar>
        <MenuBar onClick={() => routerPage('myPage')}>
          <Image src={'/images/user.svg'} alt={'book'} width={15} height={15} />
          <MenuBarText>마이페이지</MenuBarText>
        </MenuBar>
      </MenuContainer>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  max-width: 600px;
  height: calc(env(safe-area-inset-bottom) + 62px);
  transform: translate(-50%);
  transition: bottom 0.1s ease;
  background-color: #fff;
`;
const MenuContainer = styled.ul`
  padding: 0 3rem;
  flex: 1 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const MenuBar = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const MenuBarText = styled.span`
  margin-top: 0.5rem;
  font-size: 1.3rem;
`;
