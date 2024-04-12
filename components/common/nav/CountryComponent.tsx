import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CountryModal from '@/components/modal/CountryModal';

const CountryComponent = () => {
  const [langugeSelect, setLangugeSelect] = useState<string>('language');
  const [isCountryMdoalOpen, setIsisCountryMdoalOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    //위치에 따라 국가가 설정된다.
  }, [langugeSelect]);

  const handleChange = (menu: string) => {
    if (menu === 'en') {
      i18n.changeLanguage(menu);
      setLangugeSelect('USA');
    } else if (menu === 'th') {
      i18n.changeLanguage(menu);
      setLangugeSelect('Thailand');
    } else {
      i18n.changeLanguage(menu);
      setLangugeSelect('korean');
    }
  };

  const handleLanguageChange = () => {
    setIsisCountryMdoalOpen(true);
  };

  const onClose = () => {
    setIsisCountryMdoalOpen(false);
  };
  return (
    <div className="flex items-center w-2/4">
      <div className="flex justify-end w-full">
        <div className="relative right-3 flex hover:focus">
          <div
            className="relative right-2.5 flex hover:cursor-pointer"
            onClick={() => handleLanguageChange()}
          >
            <Image
              src={`${
                langugeSelect === 'language'
                  ? '/images/language.jpeg'
                  : `${'/images/' + `${langugeSelect}` + '.png'}`
              }`}
              alt={'world'}
              width={30}
              height={20}
            />
            {isCountryMdoalOpen && <CountryModal isCountryMdoalOpen onClose={onClose} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;
