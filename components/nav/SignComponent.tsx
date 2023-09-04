import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SignComponent = () => {
  const [langugeSelect, setLangugeSelect] = useState('korean');

  useEffect(() => {
    //위치에 따라 국가가 설정된다.
  }, [langugeSelect]);
  const handleChange = (e: any) => {
    const { value } = e.target;
    setLangugeSelect(value);
  };

  return (
    <SignComponentLayout>
      <Content>
        <Button>장바구니</Button>
        <Button>로그인</Button>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="languge select"
            value={langugeSelect}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'english'}>english</MenuItem>
            <MenuItem value={'tailand'}>tailand</MenuItem>
            <MenuItem value={'korean'}>korean</MenuItem>
          </Select>
        </FormControl>
      </Content>
    </SignComponentLayout>
  );
};

export default SignComponent;

const SignComponentLayout = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
