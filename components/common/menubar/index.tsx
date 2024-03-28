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
    <div className="w-full">
      <ul className="flex justify-between w-full h-full mt-2 py-2">
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('hair');
          }}
        >
          <Image src={'/images/home.svg'} alt={'homeMenu'} width={15} height={15} />
          <span className="text-base mt-1">헤어</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('nail');
          }}
        >
          <Image src={'/images/book.svg'} alt={'nailMenu'} width={15} height={15} />
          <span className="text-base mt-1">네일</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('makeup');
          }}
        >
          <Image src={'/images/market.svg'} alt={'makeupMenu'} width={15} height={15} />
          <span className="text-base mt-1">메이크업</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('mans');
          }}
        >
          <Image src={'/images/saveImg.png'} alt={'mansMenu'} width={15} height={15} />
          <span className="text-base mt-1">Mans</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => routerPage('stylereview')}
        >
          <Image src={'/images/user.svg'} alt={'styleReview'} width={15} height={15} />
          <span className="text-base mt-1">스타일후기</span>
        </ul>
      </ul>
    </div>
  );
};

export default MenuBar;
