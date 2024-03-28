import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
    <div className="fixed bottom-0 w-full max-w-screen-sm transform-translate-x-1/2">
      <div className="w-full flex justify-between">
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('home');
          }}
        >
          <Image src={'/images/home.svg'} alt={'home'} width={15} height={15} />
          <span className="text-base mt-1">홈</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('stylebook');
          }}
        >
          <Image src={'/images/book.svg'} alt={'styleBook'} width={15} height={15} />
          <span className="text-base mt-1">Style book</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('market');
          }}
        >
          <Image src={'/images/market.svg'} alt={'market'} width={15} height={15} />
          <span className="text-base mt-1">마켓</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            routerPage('mypick');
          }}
        >
          <Image src={'/images/saveImg.png'} alt={'myPick'} width={15} height={15} />
          <span className="text-base mt-1">My Pick</span>
        </ul>
        <ul
          className="flex flex-col items-center cursor-pointer"
          onClick={() => routerPage('mypage')}
        >
          <Image src={'/images/user.svg'} alt={'book'} width={15} height={15} />
          <span className="text-base mt-1">My Page</span>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
