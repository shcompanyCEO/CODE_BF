import React from 'react';
import Image from 'next/image';
import {
  HOME_ROUTE,
  STYLE_ROUTE,
  MARKET_ROUTE,
  MYPICK_ROUTE,
  MYPAGE_ROUTE,
} from 'constants/routes';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full max-w-screen-sm transform-translate-x-1/2 bg-white">
      <div className="w-full flex justify-between">
        <Link href={HOME_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/home.svg'} alt={'home'} width={15} height={15} />
            <span className="text-base mt-1">홈</span>
          </ul>
        </Link>
        <Link href={STYLE_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/book.svg'} alt={'styleBook'} width={15} height={15} />
            <span className="text-base mt-1">Style book</span>
          </ul>
        </Link>
        <Link href={MARKET_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/market.svg'} alt={'market'} width={15} height={15} />
            <span className="text-base mt-1">마켓</span>
          </ul>
        </Link>
        <Link href={MYPICK_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/saveImg.png'} alt={'myPick'} width={15} height={15} />
            <span className="text-base mt-1">My Pick</span>
          </ul>
        </Link>
        <Link href={MYPAGE_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/user.svg'} alt={'book'} width={15} height={15} />
            <span className="text-base mt-1">My Page</span>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
