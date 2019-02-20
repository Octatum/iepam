import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from './Text';
import { Flex, Box } from '@rebass/grid';
import Button from './Button';
import Popups from './Popups';
import { Link } from 'gatsby';
import { device } from '../utils/device';
import { PopupContainer } from './Popups';
import BackgroundBox from './BackgroundBox';
import UserContext from './UserContext';

const FlexLayout = styled(Flex)`
  background: ${({ theme }) => theme.color.footer};
`;

const Centered = styled(Text)`
  text-align: center;
  ${device.mobile} {
    text-align: left;
  }
`;

const NotTabletCentered = styled(Text)`
  text-align: center;
  ${device.mobile} {
    text-align: left;
  }
  ${device.tablet} {
    text-align: center;
  }
`;

const Footer = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);

  return (
    <footer>
      <Flex flexDirection="column" alignItems="center" as={BackgroundBox} backgroundColor="darkestGray" pb={4}>
        <BackgroundBox width="0" css={{ borderLeft: '2em solid transparent', borderRight: '2em solid transparent', borderTop: '2em solid white' }} />
        <Text size={3} color="white" align="center">
          <Text bold color='white' style={{ fontSize: 'inherit' }} as='span'>Entra</Text>
          {' '} para conocer todos nuestros cursos {' '}
          <Text bold color='white' style={{ fontSize: 'inherit' }} as='span'>gratis</Text>
        </Text>
        <Box mt={3}>
          <Popups
            handleLogin={setLoggedIn}
            current="register"
            triggerElement={
              <Button
                size={2}
                bold
                css={{ cursor: 'pointer' }}
              >
                Registrarse ahora
            </Button>
            }
          />
        </Box>
      </Flex>
      <FlexLayout flexDirection={['column', 'row', 'row']} flexWrap={['nowrap','wrap','wrap']} width={[1, 1, 1]} order={[0, 0, 0]} py={4} px={[0, 5, 6]} justifyContent="center">
        <Box px={[0, 0, 4]} width={[1, 1 / 2, 1 / 3]} my={[3, 0, 0]}>
          <Box mb={3}>
            <Centered size={2} bold>
              Sugerencias y Comentarios
            </Centered>
          </Box>
          <PopupContainer as={Flex} justifyContent={["center", 'initial', 'initial']}>
            <Popups
              current="suggestion"
              handleLogin={null}
              triggerElement={
                <Button
                  kind="dark"
                  size={1}
                  css={{ cursor: 'pointer', padding: '1em 1.5em' }}
                >
                  Buzón de Sugerencias
                </Button>
              }
            />
          </PopupContainer>
        </Box>

        <Box px={[4, 0, 4]} width={[1, 1 / 2, 1 / 3]} order={[1, 1, 0]} my={[3, 0, 0]}>
          <Box mb={3}>
            <Centered size={2} bold>
              Compromiso
            </Centered>
          </Box>
          <Centered size={1}>
            Nuestra misión es ejecutar, coordinar y promover ls políticas,
            programas, acciones y estrategis para el desarrollo integral de
            las Personas Adultas Mayores de Nuevo León
          </Centered>
        </Box>

        <Box px={[0, 0, 4]} width={[1, 1 / 2, 1 / 3]} order={[0, 2, 0]} my={[3, 4, 0]}>
          <Box mb={3}>
            <Centered size={2} bold>
              Secciones
            </Centered>
          </Box>
          <Flex flexDirection={['column', 'row', 'row']} alignItems={['center', 'initial', 'initial']} flexWrap={['nowrap', 'wrap', 'wrap']}>
            <Box width={['auto', 1 / 2, 1 / 2]} mb={2}>
              <Centered size={1} as={Link} to="/">
                Inicio
              </Centered>
            </Box>
            <Box width={['auto', 1 / 2, 1 / 2]} mb={2}>
              <Centered size={1} as={Link} to="/educacion">
                Educación
              </Centered>
            </Box>
            <Box width={['auto', 1 / 2, 1 / 2]} mb={2}>
              <Centered size={1} as={Link} to="/biblioteca">
                Biblioteca
              </Centered>
            </Box>
            <Box width={['auto', 1 / 2, 1 / 2]} mb={2}>
              <Centered size={1} as={Link} to="/bienestar">
                Bienestar
              </Centered>
            </Box>
            <Box width={['auto', 1 / 2, 1 / 2]} mb={2}>
              <Centered size={1} as={Link} to="/ludoteca">
                Ludoteca
              </Centered>
            </Box>
            <Box width={['auto', 1 / 2, 1 / 2]} mb={2}>
              <Centered size={1} as={Link} to="/revista">
                Revista
              </Centered>
            </Box>
          </Flex>
        </Box>

        <Box px={[4, 0, 0]} width={[1, 1 / 2, 1]} order={[3, 3, 0]} my={[2, 4, 4]} mb={4}>
          <Box mb={1} >
            <NotTabletCentered size={1} align="center">
              <Text as="span" size={1} bold>
                IEPAM
              </Text>{' '}
              &bull; (81) 2723 0982 &bull; Madrid 207, Mirador, C.P. 64910,
              Monterrey, N.L.
            </NotTabletCentered>
          </Box>
          <Box >
            <NotTabletCentered size={0} align="center">
              &copy;Instituto Estatal de las Personas Adultas Mayores
            </NotTabletCentered>
          </Box>
        </Box>
      </FlexLayout>
    </footer>
  );
};

export default Footer;
