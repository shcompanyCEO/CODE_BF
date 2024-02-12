import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const CountryComponent = () => {
  const [langugeSelect, setLangugeSelect] = useState<string>('language');
  const [isOpen, setIsLanguageCheck] = useState<boolean>(false);
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
    setIsLanguageCheck(!isOpen);
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
            <div
              className={
                isOpen === true
                  ? 'absolute top-11 right-0 w-40 p-3 block border-solid border-2 border-gray bg-white rounded-lg'
                  : 'hidden'
              }
            >
              <button
                className="w-full h-auto flex items-center "
                onClick={() => handleChange('en')}
              >
                <Image
                  className="mr-5 py-2"
                  src={'/images/USA.png'}
                  alt={'USA'}
                  width={25}
                  height={25}
                />
                USA
              </button>
              <button className="w-full flex items-center" onClick={() => handleChange('th')}>
                <Image
                  className="mr-5 py-2"
                  src={'/images/thailand.png'}
                  alt={'thailand'}
                  width={25}
                  height={25}
                />
                Thailand
              </button>
              <button className="w-full flex items-center" onClick={() => handleChange('ko')}>
                <Image
                  className="mr-5 py-2"
                  src={'/images/korean.png'}
                  alt={'korean'}
                  width={25}
                  height={25}
                />
                Korea
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;
