import React from 'react';
import styled, { css } from 'styled-components';

interface CategroyProps {
  menu: string;
  fontSize: string;
}

const Category = ({ menu, fontSize }: CategroyProps) => {
  return <CategoryLayout fontSize={fontSize}>{menu}</CategoryLayout>;
};

export default Category;

const CategoryLayout = styled.div<{ fontSize: string }>`
  ${({ fontSize }) => {
    return css`
      width: 100%;
      font-size: ${fontSize};
    `;
  }}
`;
