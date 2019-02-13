import React, { useContext } from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import Logo from '../../assets/Logo.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';

import Button from '../Button';
import Popups, { PopupContainer } from '../Popups';
import SuggestionBox from '../Popups/SuggestionBox';
import NavLink from './NavLink';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';
import UserContext from '../UserContext';

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);

  return (
    <Flex as="nav" flexDirection="column" py={4}>
      <Flex justifyContent="space-between" css={{ height: '125px' }} mx={4} mb={4}>
        <Box width={3 / 10} >
          <Image src={Logo} />
        </Box>
        <Box width={3 / 10}>
          <Flex
            css={{ height: '100%' }}
            alignItems="center"
            justifyContent="space-around"
          >
            {!loggedIn ?
              <React.Fragment>
                <Box width={1 / 2} pr={1}>
                  <Popups
                    handleLogin={setLoggedIn}
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
                    handleLogin={setLoggedIn}
                    current="login"
                    triggerElement={
                      <FullSizeButton size={2} bold css={{ cursor: 'pointer' }}>
                        Iniciar Sesión
                      </FullSizeButton>
                    }
                  />
                </Box>
              </React.Fragment>
              :
              <React.Fragment>
                <Box width={1 / 2}>
                  <FullSizeButton size={2} bold css={{ cursor: 'pointer' }} kind="dark" onClick={() => setLoggedIn(null)}>
                    Logout
                  </FullSizeButton>
                </Box>
                <Box width={1 / 2}>
                  <Text size={2} align="center">Bienvenido usuario</Text>
                </Box>
              </React.Fragment>
            }
          </Flex>
        </Box>
      </Flex>

      <Flex
        css={{ height: '100%' }}
        alignItems="stretch"
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
        <NavLink size={2} to="/ludoteca" width={1}>
          Ludoteca
        </NavLink>
      </Flex>

      <Flex my={3} mx={4} alignItems="center">
        <Box width={1 / 6}>
          <PopupContainer>
            <SuggestionBox
              triggerElement={
                <Button kind="dark" size={2} css={{ cursor: 'pointer', padding: "1em 1.5em" }}>
                  Buzón de Sugerencias
              </Button>
              }
            />
          </PopupContainer>
        </Box>
        <Box width={3 / 6} />
        <Flex width={2 / 6} alignItems="center" justifyContent="flex-end">
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
