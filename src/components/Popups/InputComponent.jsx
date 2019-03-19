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
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
`;
const Input = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
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

  background-color: ${({ theme, ischecked }) =>
    ischecked ? theme.color.darkestGray : 'black'};
  color: ${({ theme, ischecked }) => (ischecked ? theme.color.white : 'black')};
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
  size = 1,
  ...other
}) => (
  <BorderBox
    alignItems="center"
    flexDirection={['column', 'row']}
    p={2}
    width={width}
    {...other}
  >
    <Box as={Text} width={[1, 1 / 3]} size={size} alignSelf="flex-start">
      {placeholder}
    </Box>
    <Box width={[1, 2 / 3]}>
      <Text
        color="darkGray"
        size={size}
        as={isMessage ? Message : Input}
        placeholder={''}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Box>
  </BorderBox>
);

export const SelectionComponent = ({
  options,
  name,
  value,
  handleBlur,
  handleChange,
  size = 1,
  title = '',
  ...other
}) => (
  <Flex {...other} alignItems="center" flexDirection={['column', 'row']}>
    {title && (
      <Box as={Text} width={[1, 1 / 3]} alignSelf="flex-start" size={size}>
        {title}
      </Box>
    )}
    <Box width={title ? [1, 2 / 3] : 1}>
      <Text
        as="select"
        color="darkGray"
        size={size}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        style={{ cursor: 'pointer', border: 'none', width: '100%' }}
      >
        {options.map(data => {
          return (
            <option value={data} key={data}>
              {data}
            </option>
          );
        })}
      </Text>
    </Box>
  </Flex>
);

export const CheckboxComponent = ({
  name,
  value,
  handleChange,
  handleBlur,
  children,
  size = 1,
  ...other
}) => (
  <Flex {...other} as="label" css={{ position: 'relative', cursor: 'pointer' }}>
    <CheckboxInput
      type="checkbox"
      value={value}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <CheckboxDesign ischecked={value}>&#x2714;</CheckboxDesign>
    <Text size={size} color="darkGray">
      {children}
    </Text>
  </Flex>
);

export const Bordered = ({ children, ...props }) => (
  <BorderBox justifyContent="flex-start" alignItems="center" p={2} {...props}>
    {children}
  </BorderBox>
);

export const JustInput = ({ handleBlur, handleChange, ...props }) => (
  <Text
    color="darkGray"
    size={1}
    as={Input}
    onChange={handleChange}
    onBlur={handleBlur}
    {...props}
  />
);

export default InputComponent;
