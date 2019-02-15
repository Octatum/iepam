import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import { Link } from 'gatsby';

import Logo from '../../assets/Logo.svg';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';
import Burger from './Burger';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import Popups from '../Popups';
import UserContext from '../UserContext';

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const Content = styled(Flex)`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;

const MobileNavbar = ({ ...props }) => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <Flex
      flexDirection="column"
      as={BackgroundBox}
      backgroundColor="white"
      {...props}
      css={{ height: `${isOpen ? '100vh' : 'auto'}` }}
    >
      <Flex flexDirection="column">
        <Flex
          alignItems="stretch"
          px={4}
          py={3}
          as={BackgroundBox}
          backgroundColor="superLightGray"
          css={{ height: '75px' }}
        >
          <Burger width="auto" isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
          <Box width={1 / 20} />
          <Box width={2 / 10}>
            <img src={Logo} style={{ height: '100%' }} />
          </Box>
          <Box width={1} />
        </Flex>
        <Flex width={1} alignItems="stretch" justifyContent="flex-end" px={4} as={BackgroundBox} backgroundColor="superLightGray" pb={4}>
          <BackgroundBox width={1} backgroundColor="lightGray" p={3}>
            <Text size={2} color="darkGray">
              Buscar Cualquier Cosa
            </Text>
          </BackgroundBox>
          <BackgroundBox as={Flex} alignItems="center" backgroundColor="black" width='50px' p={2}>
            <Image src={MagnifyingGlass} />
          </BackgroundBox>
        </Flex>
      </Flex>
      <Content
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        isOpen={isOpen}
        css={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}
      >
        <Box py={2}>
          <Text bold size={5} as={Link} to="/">
            Inicio
          </Text>
        </Box>
        <Box py={2}>
          <Text bold size={5} as={Link} to="/educacion">
            Educación
          </Text>
        </Box>
        <Box py={2}>
          <Text bold size={5} as={Link} to="/bienestar">
            Bienestar
          </Text>
        </Box>
        <Box py={2}>
          <Text bold size={5} as={Link} to="/revista">
            Revista Digital
          </Text>
        </Box>
        <Box py={2}>
          <Text bold size={5} as={Link} to="/biblioteca">
            Biblioteca Virtual
          </Text>
        </Box>
        <Box py={2}>
          <Text bold size={5} as={Link} to="/ludoteca">
            Ludoteca
          </Text>
        </Box>
      </Content>

      <Content
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        isOpen={isOpen}
        py={2}
      >
        {!loggedIn ? (
          <React.Fragment>
            <Box width={[1 / 2, 1 / 4]} my={2}>
              <Popups
                handleLogin={setLoggedIn}
                current="register"
                triggerElement={
                  <FullSizeButton
                    size={2}
                    bold
                    css={{ cursor: 'pointer' }}
                    kind="dark"
                  >
                    Registrarse
                  </FullSizeButton>
                }
              />
            </Box>
            <Box width={[1 / 2, 1 / 4]} my={2}>
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
        ) : (
          <React.Fragment>
            <Box width={[1 / 2, 1 / 4]} my={2}>
              <FullSizeButton
                size={2}
                bold
                css={{ cursor: 'pointer' }}
                kind="dark"
                onClick={() => setLoggedIn(null)}
              >
                Logout
              </FullSizeButton>
            </Box>
            <Box width={[1 / 2, 1 / 4]} my={2}>
              <Text size={2} align="center">
                Bienvenido usuario
              </Text>
            </Box>
          </React.Fragment>
        )}
      </Content>
    </Flex>
  );
};

export default MobileNavbar;