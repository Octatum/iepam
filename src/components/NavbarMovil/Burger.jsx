import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

const CollapsibleMenu = styled.div`
  width: 100%;
  height: auto;
  padding: 0.65em 0;  
`;
const MenuIcon = styled(Box)`

`;
const Bar = styled.div`
  width: 3em;
  height: 0.5em;
  background-color: ${({ theme }) => theme.color.black};
  margin: 0.5em 0;
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
  <Flex justifyContent="flex-start" {...props}>
    <MenuIcon>
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
    </MenuIcon>
  </Flex>
)

export default Burger;