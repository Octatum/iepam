import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

const Clickable = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: none;
  border: none;
  
  cursor: pointer;
`;
const TopX = styled.div`
  width: 30px;
  height: 6px;
  transform: rotate(45deg) translate(8px, 8px);
  background: black;
`;
const BottomX = styled.div`
  width: 30px;
  height: 6px;
  transform: rotate(-45deg) translate(-6px,15px);
  transform-origin: 0 100%;
  background: black;
`;

const CloseButton = ({ closeFunction, ...props }) => (
  <Flex {...props} css={{ cursor: 'pointer' }} flexDirection="column" css={{ position: 'sticky', top: 0, height: '30px' }}>
      <TopX />
      <BottomX />
      <Clickable onClick={closeFunction} />
  </Flex>
)

export default CloseButton;