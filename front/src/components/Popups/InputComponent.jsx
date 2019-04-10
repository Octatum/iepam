import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { Flex, Box } from '@rebass/grid';
import { Field } from 'formik';

const BorderBox = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.dark};
`;
const Message = styled(Field)`
  min-height: 10rem;
  resize: vertical;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
`;
const Input = styled(Field)`
  border: none;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
`;

const CheckboxDesign = styled.span`
  width: 25px;
  height: 25px;
  font-size: 1.5rem;
  text-align: center;

  margin-right: 1em;

  background-color: ${({ theme }) =>
    theme.color.black};
  color: transparent;
`;
const CheckboxInput = styled(Field)`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked ~ ${CheckboxDesign} {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darkestGray};
  }
`;

const InputComponent = ({
  placeholder,
  type = 'text',
  name = '',
  isMessage = false,
  width = 1,
  size = 1,
  ...other
}) => (
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    width={width}
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
        component={isMessage ? 'textarea' : 'input'}
        name={name}
        {...other}
      />
    </Box>
  </Flex>
);

export const SelectionComponent = ({
  options,
  name,
  size = 1,
  title = '',
  width = 1,
  ...other
}) => (
  <Flex width={width} alignItems="center" flexDirection={['column', 'row']}>
    {title && (
      <Box as={Text} width={[1, 1 / 3]} alignSelf="flex-start" size={size}>
        {title}
      </Box>
    )}
    <Box width={title ? [1, 2 / 3] : 1}>
      <Text
        as={Field}
        component='select'
        color="darkGray"
        size={size}
        name={name}
        {...other}
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
  children,
  size = 1,
  width = 1,
  ischecked,
  ...other
}) => (
  <Flex width={width} as="label" css={{ position: 'relative', cursor: 'pointer' }}>
    <CheckboxInput
      type="checkbox"
      name={name}
      {...other}
    />
    <CheckboxDesign>&#x2714;</CheckboxDesign>
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

export const JustInput = ({ ...props }) => (
  <Text
    color="darkGray"
    size={1}
    as={Input}
    {...props}
  />
);

export default InputComponent;
