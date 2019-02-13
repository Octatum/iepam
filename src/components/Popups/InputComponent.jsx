import React from 'react';
import styled from 'styled-components';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';
import { Flex, Box } from '@rebass/grid';

const BorderBox = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.dark};
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const InputComponent = ({
  placeholder,
  type = 'text',
  name = '',
  value,
  handleChange,
  handleBlur,
  ...other
}) => (
  <BorderBox
    justifyContent="flex-start"
    alignItems="center"
    p={2}
    width={1}
    {...other}
  >
    {/* <BackgroundBox
      backgroundColor="darkGray"
      as={Box}
      mr="10px"
      width="40px"
      css={{ height: '40px' }}
    /> */}
    <Text
      color="darkGray"
      size={2}
      as={Input}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  </BorderBox>
);

export default InputComponent;