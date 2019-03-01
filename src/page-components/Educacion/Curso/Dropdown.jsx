import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import BackgroundBox from '../../../components/BackgroundBox';
import Text from '../../../components/Text';

const Minus = styled(Box).attrs({
  width: '40px',
})`
  background-color: black;
  height: 10px;
`;
const Plus = styled(Minus)`
  position: absolute;
  top: 50%;
  left: 50%;
  
  transition: transform 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ isOpen }) => isOpen ? 'translate(-50%, -50%) rotate(0deg)' : 'translate(-50%, -50%) rotate(90deg)' };
`;

const Shadow = styled(BackgroundBox)`
  box-shadow: 0 5px 10px 2px ${({ theme }) => theme.color.opaqueBlack};
`;

const Collapse = styled(Box)`
  
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
`;

const Dropdown = ({ title, description, link, ...other }) => {
  const [isOpen, setOpen] = useState(false);
 
  return (
    <Flex flexDirection="column" mb={4} {...other} onClick={() => setOpen(!isOpen)} style={{cursor:'pointer'}}>
      <Shadow backgroundColor="lightGray" as={Flex} pt={3} pb={4} px={3}>
        <Flex alignItems="center" justifyContent="center" width={1 / 15} css={{position:'relative'}}>
          <Plus isOpen={isOpen} />
          <Minus />
        </Flex>
        <Text size={2}>{title}</Text>
      </Shadow>
      
      <Collapse width={14 / 15} py={4} alignSelf="flex-end" px={3} isOpen={isOpen}>
        <Text size={2}>
          {description} 
        </Text>
      </Collapse>
    </Flex>
  )
}

export default Dropdown;