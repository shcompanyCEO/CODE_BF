import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

const SignComponent = () => {
  const [langugeSelect, setLangugeSelect] = useState<string>('language');
  const [isOpen, setIsLanguageCheck] = useState<boolean>(false);

  useEffect(() => {
    //위치에 따라 국가가 설정된다.
  }, [langugeSelect]);

  const handleChange = (menu: string) => {
    setLangugeSelect(menu);
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
          <LangugeSelectBox isopen={`${isOpen}`}>
            <Button className={'select'} onClick={() => handleChange('USA')}>
              <Image
                className={'languageImg'}
                src={'/images/USA.png'}
                alt={'USA'}
                width={15}
                height={15}
              />
              USA
            </Button>
            <Button className={'select'} onClick={() => handleChange('thailand')}>
              <Image
                className={'languageImg'}
                src={'/images/thailand.png'}
                alt={'thailand'}
                width={15}
                height={15}
              />
              Thailand
            </Button>
            <Button className={'select'} onClick={() => handleChange('korean')}>
              <Image
                className={'languageImg'}
                src={'/images/korean.png'}
                alt={'korean'}
                width={15}
                height={15}
              />
              korea
            </Button>
          </LangugeSelectBox>
        </LangugeSelectLayout>
      </Content>
    </SignComponentLayout>
  );
};

export default SignComponent;

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

const LangugeSelectBox = styled.div<{ isopen: string }>`
  ${({ isopen }) => {
    return isopen === 'true'
      ? css`
          position: absolute;
          top: 25px;
          right: 0;
          display: block;
          width: 13rem;
          border: 1px solid gray;
          border-radius: 0.5rem;
        `
      : css`
          display: none;
        `;
  }};
`;
