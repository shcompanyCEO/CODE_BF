import React from 'react';
import styled from 'styled-components';

const SignComponent = () => {
  return (
    <SignComponentLayout>
      <Content>
        <Button>장바구니</Button>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </Content>
    </SignComponentLayout>
  );
};

export default SignComponent;

const SignComponentLayout = styled.div`
  width: 18rem;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
`;
