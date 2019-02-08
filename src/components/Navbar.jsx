import React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import Text from './Text';
import Button from './Button';
import GatsbyLink from 'gatsby-link';
import Popups from './Popups'

const GrayBox = styled(Box)`
  background: ${({ theme }) => theme.color.lightGray};
`;

const DarkGrayBox = styled(Box)`
  background: ${({ theme }) => theme.color.darkGray};
`;

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
  return (
    <Flex as="nav" flexDirection="column" p={4}>
      <Flex>
        <Box width={1}>
          <Text align="right" bold>
            (210) 647-420 5305
          </Text>
          <Text align="right">Bandera Rd, San Antonio, TX 78238, USA</Text>
        </Box>
      </Flex>
      <Flex>
        <GrayBox width={1 / 5} py={4} />
        <Box width={2 / 5}>
          <Flex
            css={{ height: '100%' }}
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width={1 / 4}>
              <Text bold align="center">
                <GatsbyLink to="/">Inicio</GatsbyLink>
              </Text>
            </Box>
            <Box width={1 / 4}>
              <Text bold align="center">
                <GatsbyLink to="/educacion/">Educación</GatsbyLink>
              </Text>
            </Box>
            
          </Flex>
        </Box>
        <Box width={2 / 10} />
        <Box width={2 / 10}>
          <Flex
            css={{ height: '100%' }}
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width={1 / 2} pr={1}>
              <Popups current="register" triggerElement={<FullSizeButton css={{ cursor: 'pointer' }} kind="dark">Registrarse</FullSizeButton>} />
            </Box>
            <Box width={1 / 2}>
              <Popups current="login" triggerElement={<FullSizeButton css={{ cursor: 'pointer' }}>Entrar</FullSizeButton>} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Box width={4 / 6} />
        <Box width={2 / 6}>
          <Flex>
            <DarkGrayBox width={1 / 6} p={3} />
            <DarkGrayBox width={5 / 6} p={3} ml={3} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
