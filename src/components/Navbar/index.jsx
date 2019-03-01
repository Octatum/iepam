import React, { useContext } from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import Logo from '../../assets/Logo.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';

import Button from '../Button';
import Popups, { PopupContainer } from '../Popups';
import NavLink from './NavLink';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';
import UserContext from '../UserContext';
import { mySignOut, myGetUserData } from '../../utils/useAuth';

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const Navbar = ({ ...props }) => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const userData = myGetUserData();

  return (
    <Flex as="nav" flexDirection="column" py={4} {...props}>
      <Flex
        justifyContent="space-between"
        css={{ height: '125px' }}
        mx={4}
        mb={4}
      >
        <Box width={3 / 10}>
          <Image src={Logo} />
        </Box>

        <Box width={3 / 10}>
          <Flex
            css={{ height: '100%' }}
            alignItems="center"
            justifyContent="space-around"
          >
            {!loggedIn ? (
              <React.Fragment>
                <Box width={1 / 2} pr={1}>
                  <Popups
                    handleLogin={setLoggedIn}
                    current="register"
                    triggerElement={
                      <FullSizeButton
                        size={1.5}
                        bold
                        css={{ cursor: 'pointer' }}
                        kind="dark"
                      >
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
                      <FullSizeButton size={1.5} bold css={{ cursor: 'pointer' }}>
                        Iniciar Sesión
                      </FullSizeButton>
                    }
                  />
                </Box>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <Box width={1 / 2}>
                    <FullSizeButton
                      size={1.5}
                      bold
                      css={{ cursor: 'pointer' }}
                      kind="dark"
                      onClick={() => mySignOut()}
                    >
                      Logout
                  </FullSizeButton>
                  </Box>
                  <Box width={1 / 2}>
                    <Text size={1.5} align="center">
                      Bienvenido {userData.displayName}
                  </Text>
                  </Box>
                </React.Fragment>
              )}
          </Flex>
        </Box>
      </Flex>

      <Flex
        css={{ height: '100%' }}
        alignItems="stretch"
        justifyContent="space-evenly"
        mb={4}
      >
        <NavLink size={1.5} to="/" width={1}>
          Inicio
        </NavLink>
        <NavLink size={1.5} to="/educacion" width={1}>
          Educación
        </NavLink>
        <NavLink size={1.5} to="/bienestar" width={1}>
          Bienestar
        </NavLink>
        <NavLink size={1.5} to="/revista" width={1}>
          Revista Digital
        </NavLink>
        <NavLink size={1.5} to="/biblioteca" width={1}>
          Biblioteca Virtual
        </NavLink>
        <NavLink size={1.5} to="/ludoteca" width={1}>
          Ludoteca
        </NavLink>
      </Flex>

      <Flex my={3} mx={4} alignItems="center">
        <Box width={1 / 6}>
          <PopupContainer>
            <Popups
              current='suggestion'
              handleLogin={null}
              triggerElement={
                <Button
                  kind="dark"
                  size={1.5}
                  css={{ cursor: 'pointer', padding: '1em 1.5em' }}
                >
                  Buzón de Sugerencias
                </Button>
              }
            />
          </PopupContainer>
        </Box>
        <Box width={3 / 6} />
        <Flex width={2 / 6} alignItems="stretch" justifyContent="flex-end">
          <BackgroundBox width={1} backgroundColor="lightGray" p={3}>
            <Text size={1.5} color="darkGray">
              Buscar Cualquier Cosa
            </Text>
          </BackgroundBox>
          <BackgroundBox as={Flex} alignItems="center" backgroundColor="black" width='50px' p={2}>
            <Image src={MagnifyingGlass} />
          </BackgroundBox>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
