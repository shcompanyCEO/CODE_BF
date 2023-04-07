import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {
  return (
    <FooterLayout>
      <MenuContainer>
        <MenuBar>
          <Image src={'/images/home.svg'} alt={'home'} width={15} height={15} />
          <MenuBarText>홈</MenuBarText>
        </MenuBar>
        <MenuBar>
          <Image src={'/images/book.svg'} alt={'styleBook'} width={15} height={15} />
          <MenuBarText>style book</MenuBarText>
        </MenuBar>
        <MenuBar>
          <Image src={'/images/search.svg'} alt={'search'} width={15} height={15} />
          <MenuBarText>검색</MenuBarText>
        </MenuBar>
        <MenuBar>
          <Image src={'/images/saveImg.png'} alt={'myPick'} width={15} height={15} />
          <MenuBarText>마이픽</MenuBarText>
        </MenuBar>
        <MenuBar>
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
`;
