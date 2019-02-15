import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

const Bar = styled(Box)`
  width: 3em;
  height: 0.5em;
  background-color: ${({ theme }) => theme.color.black};
  transition: all 0.5s ease;
`;
const Bar1 = styled(Bar)`
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(-45deg) translate(-0.45em, -0.5em)' : 'rotate(0deg)'};
  transform-origin: 100% 0%;
`;
const Bar2 = styled(Bar)`
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(180deg) scale(0)' : 'rotate(0deg)'};
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
`;
const Bar3 = styled(Bar)`
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(45deg) translate(-0.4em, 0.4em)' : 'rotate(0deg)'};
  transform-origin: 100% 100%;
`;

const Burger = ({ isOpen, ...props }) => (
  <Flex {...props}>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
    </Flex>
  </Flex>
);

export default Burger;
