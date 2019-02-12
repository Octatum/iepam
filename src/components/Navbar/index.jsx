import React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import Logo from '../../assets/Logo.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';

import Button from '../Button';
import Popups from '../Popups';
import SuggestionBox from '../Popups/SuggestionBox';
import NavLink from './NavLink';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const Navbar = () => {
  return (
    <Flex as="nav" flexDirection="column" p={4}>
      <Flex justifyContent="space-between" css={{ height: '125px' }} mb={4}>
        <Box width={3 / 10} >
          <Image src={Logo} />
        </Box>
        <Box width={3 / 10}>
          <Flex
            css={{ height: '100%' }}
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width={1 / 2} pr={1}>
              <Popups
                current="register"
                triggerElement={
                  <FullSizeButton size={2} bold css={{ cursor: 'pointer' }} kind="dark">
                    Registrarse
                  </FullSizeButton>
                }
              />
            </Box>
            <Box width={1 / 2}>
              <Popups
                current="login"
                triggerElement={
                  <FullSizeButton size={2} bold css={{ cursor: 'pointer' }}>
                    Entrar
                  </FullSizeButton>
                }
              />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        css={{ height: '100%' }}
        alignItems="center"
        justifyContent="space-evenly"
        mb={4}
      >
        <NavLink size={2} to="/" width={1}>
          Inicio
        </NavLink>
        <NavLink size={2} to="/educacion" width={1}>
          Educación
        </NavLink>
        <NavLink size={2} to="/bienestar" width={1}>
          Bienestar
        </NavLink>
        <NavLink size={2} to="/revista" width={1}>
          Revista Digital
        </NavLink>
        <NavLink size={2} to="/biblioteca" width={1}>
          Biblioteca Virtual
        </NavLink>
        <NavLink size={2} to="/Ludoteca" width={1}>
          Ludoteca
        </NavLink>
      </Flex>

      <Flex my={3} alignItems="center">
        <Box width={1 / 6}>
          <SuggestionBox
            triggerElement={
              <Button kind="dark" size={2} css={{ cursor: 'pointer', padding:"1em 1.5em" }}>
                Buzón de Sugerencias
              </Button>
            }
          />
        </Box>
        <Box width={3 / 6} />
        <Flex width={2 / 6} alignItems="center">
          <BackgroundBox width={5 / 6} backgroundColor="lightGray" p={3} mr={3}>
            <Text size={2} color="darkGray">
              Buscar Cualquier Cosa
            </Text>
          </BackgroundBox>
          <Image src={MagnifyingGlass} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
