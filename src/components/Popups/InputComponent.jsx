import React from 'react';
import styled from 'styled-components';
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
  width = 1,
  ...other
}) => (
  <BorderBox
    justifyContent="flex-start"
    alignItems="center"
    p={2}
    width={width}
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

export const SelectionComponent = ({
  options,
  name,
  value,
  handleBlur,
  handleChange,
  ...other
}) => (
  <Flex {...other}>
    <Text as="select" color='darkGray' size={1} onChange={handleChange} onBlur={handleBlur} name={name} style={{cursor:'pointer', border:'none', width:'100%'}}>
      {options.map(data => {
        return (
          <option value={data} key={data}>
            {data}
          </option>
        )
      })}
    </Text>
  </Flex>
)

export const CheckboxComponent = ({
  name,
  value,
  handleChange,
  handleBlur,
  children,
  ...other,
}) => (
  <Flex {...other} as="label" css={{position: 'relative', cursor: 'pointer'}}>
    <CheckboxInput type="checkbox" value={value} name={name} onChange={handleChange} onBlur={handleBlur} />
    <CheckboxDesign ischecked={value}>&#x2714;</CheckboxDesign>
    <Text size={1} color="darkGray" >{children}</Text>
  </Flex>
)

export const Bordered = ({
  children,
  ...props
}) => (
  <BorderBox 
    justifyContent="flex-start"
    alignItems="center"
    p={2}
    {...props} 
  >
    {children}
  </BorderBox>
)

export const JustInput = ({ handleBlur, handleChange, ...props }) => (
  <Text
    color="darkGray"
    size={1}
    as={Input}
    onChange={handleChange}
    onBlur={handleBlur}
    {...props}
  />
)

export default InputComponent;
