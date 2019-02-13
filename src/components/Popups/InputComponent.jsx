import React from 'react';
import styled from 'styled-components';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';
import { Flex, Box } from '@rebass/grid';

const BorderBox = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.dark};
`;
const Message = styled.textarea`
  min-height: 10rem;
  resize: vertical;
  width: 100%;
  border: none;
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
  isMessage = false,
  ...other
}) => (
  <BorderBox
    justifyContent="flex-start"
    alignItems="center"
    p={2}
    width={1}
    {...other}
  >
    <Text
      color="darkGray"
      size={1}
      as={isMessage ? Message : Input}
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