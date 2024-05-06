import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HAIR_ROUTE, MAKEUP_ROUTE, MANS_ROUTE, NAIL_ROUTE, STYLE_ROUTE } from 'constants/routes';
import { useTranslation } from 'react-i18next';

const MenuBar = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <ul className="flex justify-between w-full h-full mt-2 py-2">
        <Link href={HAIR_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/home.svg'} alt={'homeMenu'} width={15} height={15} />
            <span className="text-base mt-1">
              헤어
              {/* <h1>{t('common:welcome')}</h1>
              <p>{t('greeting')}</p>
              <p>{t('hair')}</p> */}
            </span>
          </ul>
        </Link>
        <Link href={NAIL_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/book.svg'} alt={'nailMenu'} width={15} height={15} />
            <span className="text-base mt-1">네일</span>
          </ul>
        </Link>
        <Link href={MAKEUP_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/market.svg'} alt={'makeupMenu'} width={15} height={15} />
            <span className="text-base mt-1">메이크업</span>
          </ul>
        </Link>
        <Link href={MANS_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/saveImg.png'} alt={'mansMenu'} width={15} height={15} />
            <span className="text-base mt-1">Mans</span>
          </ul>
        </Link>
        <Link href={STYLE_ROUTE}>
          <ul className="flex flex-col items-center cursor-pointer">
            <Image src={'/images/user.svg'} alt={'styleReview'} width={15} height={15} />
            <span className="text-base mt-1">스타일후기</span>
          </ul>
        </Link>
      </ul>
    </div>
  );
};

export default MenuBar;
