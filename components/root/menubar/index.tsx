import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MenuBar = () => {
  const router = useRouter();

  const routerPage = (page: string) => {
    if (page === 'home') {
      router.push('/');
    } else {
      router.push(`/${page}`);
    }
  };
  return (
    <MenuSectionLayout>
      <TitleText>ALL is Design</TitleText>
      <br />
      <TitleText>Design is ALL</TitleText>
      <MenuContainer>
        <MenuBarBtn
          onClick={() => {
            routerPage('hair');
          }}
        >
          <Image src={'/images/home.svg'} alt={'homeMenu'} width={15} height={15} />
          <MenuBarText>헤어</MenuBarText>
        </MenuBarBtn>
        <MenuBarBtn
          onClick={() => {
            routerPage('nail');
          }}
        >
          <Image src={'/images/book.svg'} alt={'nailMenu'} width={15} height={15} />
          <MenuBarText>네일</MenuBarText>
        </MenuBarBtn>
        <MenuBarBtn
          onClick={() => {
            routerPage('makeup');
          }}
        >
          <Image src={'/images/market.svg'} alt={'makeupMenu'} width={15} height={15} />
          <MenuBarText>메이크업</MenuBarText>
        </MenuBarBtn>
        <MenuBarBtn
          onClick={() => {
            routerPage('makeup');
          }}
        >
          <Image src={'/images/saveImg.png'} alt={'mansMenu'} width={15} height={15} />
          <MenuBarText>맨즈</MenuBarText>
        </MenuBarBtn>
        <MenuBarBtn onClick={() => routerPage('barberShop')}>
          <Image src={'/images/user.svg'} alt={'styleReview'} width={15} height={15} />
          <MenuBarText>스타일 후기</MenuBarText>
        </MenuBarBtn>
      </MenuContainer>
    </MenuSectionLayout>
  );
};

export default MenuBar;

const MenuSectionLayout = styled.div`
  width: 100%;
  border-bottom-right-radius: 3rem;
`;

const MenuContainer = styled.ul`
  width: 100%;
  margin-top: 5rem;
  padding: 2rem 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const MenuBarBtn = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const MenuBarText = styled.span`
  margin-top: 0.5rem;
  font-size: 1.3rem;
`;

const TitleText = styled.strong`
  font-size: 2.6rem;
`;
