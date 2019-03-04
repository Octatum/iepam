import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { Flex } from '@rebass/grid';

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

const CheckboxInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;
const CheckboxDesign = styled.span`
  width: 25px;
  height: 25px;
  font-size: 1.5rem;
  text-align: center;

  margin-right: 1em;

  background-color: ${({ theme, ischecked }) => ischecked ? theme.color.darkestGray : 'black'};
  color: ${({ theme, ischecked }) => ischecked ? theme.color.white : 'black'};
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

export const CheckboxComponent = ({
  type = "checkbox",
  name,
  value,
  handleChange,
  handleBlur,
  children,
  ...other,
}) => {

  console.log(value);
  return (
    <Flex {...other} as="label" css={{position: 'relative', cursor: 'pointer'}}>
      <CheckboxInput type="checkbox" value={value} name={name} onChange={handleChange} onBlur={handleBlur} />
      <CheckboxDesign ischecked={value}>&#x2714;</CheckboxDesign>
      <Text size={1}>{children}</Text>
    </Flex>
  )
}

export default InputComponent;
