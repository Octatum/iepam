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
import { auth } from 'firebase';
import { Link } from 'gatsby';

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Navbar = props => {
  const [userData, setUserData] = useContext(UserContext);

  console.log(userData);

  return (
    <Flex as="nav" flexDirection="column" py={4} className={props.className}>
      <Box>
        <Flex
          justifyContent="space-between"
          mx={[4, 4, 4, 'auto']}
          mb={4}
          css={{ maxWidth: props.maxWidth }}
        >
          <Box width={1 / 6}>
            <Image src={Logo} />
          </Box>

          <Box width={3 / 10}>
            <Flex
              css={{ height: '100%' }}
              alignItems="center"
              justifyContent="space-around"
            >
              {!userData ? (
                <React.Fragment>
                  <Box width={1 / 2} pr={1}>
                    <Popups
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
                      current="login"
                      triggerElement={
                        <FullSizeButton
                          size={1.5}
                          bold
                          css={{ cursor: 'pointer' }}
                        >
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
                      onClick={() => setUserData(null)}
                    >
                      Logout
                    </FullSizeButton>
                  </Box>
                  <Box width={1 / 2}>
                    <Text size={1} align="center">
                      Bienvenido {userData.displayName}
                    </Text>
                    <Text size={1} align="center">
                      <Link to="/perfil">
                        Ver perfil
                      </Link>
                    </Text>
                  </Box>
                </React.Fragment>
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>

      <BackgroundBox backgroundColor="lightBrown">
        <Flex
          css={{ height: '100%', maxWidth: props.maxWidth }}
          alignItems="stretch"
          justifyContent="space-evenly"
          mx="auto"
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
      </BackgroundBox>

      <Box>
        <Flex
          my={3}
          mx={[4, 4, 4, 'auto']}
          alignItems="center"
          css={{ maxWidth: props.maxWidth }}
        >
          <Box width={1 / 6}>
            <PopupContainer>
              <Popups
                current="suggestion"
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
            <BackgroundBox
              as={Flex}
              alignItems="center"
              backgroundColor="black"
              width="50px"
              p={2}
            >
              <Image src={MagnifyingGlass} />
            </BackgroundBox>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
