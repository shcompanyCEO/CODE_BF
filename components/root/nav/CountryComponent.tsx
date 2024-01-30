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
    <SignComponentLayout>
      <Content>
        <LangugeSelectLayout onClick={() => handleLanguageChange()}>
          <Image
            className={'languageImg'}
            src={`${
              langugeSelect === 'language'
                ? '/images/language.jpeg'
                : `${'/images/' + `${langugeSelect}` + '.png'}`
            }`}
            alt={'USA'}
            width={30}
            height={20}
          />
          <LangugeSelectBox open={isOpen}>
            <Button className={'select'} onClick={() => handleChange('en')}>
              <Image
                className={'languageImg'}
                src={'/images/USA.png'}
                alt={'USA'}
                width={15}
                height={15}
              />
              USA
            </Button>
            <Button className={'select'} onClick={() => handleChange('th')}>
              <Image
                className={'languageImg'}
                src={'/images/thailand.png'}
                alt={'thailand'}
                width={15}
                height={15}
              />
              Thailand
            </Button>
            <Button className={'select'} onClick={() => handleChange('ko')}>
              <Image
                className={'languageImg'}
                src={'/images/korean.png'}
                alt={'korean'}
                width={15}
                height={15}
              />
              Korea
            </Button>
          </LangugeSelectBox>
        </LangugeSelectLayout>
      </Content>
    </SignComponentLayout>
  );
};

export default CountryComponent;

const SignComponentLayout = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 1rem;
  margin: 0;
  .languageImg {
    margin-right: 1rem;
  }
`;

const LangugeSelectLayout = styled.div`
  position: relative;
  display: flex;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const LangugeSelectBox = styled.div<{ open: boolean }>`
  ${({ open }) => {
    return open === true
      ? css`
          position: absolute;
          top: 25px;
          right: 0;
          display: block;
          /* width: 100%; */
          border: 1px solid gray;
          border-radius: 0.5rem;
          background-color: #ffff;
        `
      : css`
          display: none;
        `;
  }};
`;
