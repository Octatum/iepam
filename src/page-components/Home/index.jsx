import React, { useContext } from 'react';
import { Box, Flex } from '@rebass/grid';
import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';
import IEPAM from '../../assets/IEPAM.png';
import Row from './Row';
import { device } from '../../utils/device';
import styled from 'styled-components';
import Button from '../../components/Button';
import UserContext from '../../components/UserContext';
import Popups from '../../components/Popups';

const MobileMessage = styled(Flex)`
  ${device.laptop} {
    display: none;
  }
`;

const FullSizeButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);

  return (
    <Flex pb={4} flexDirection="column" mx={[0, 0, 4]}>
      <Box mb={4}>
        <BackgroundBox
          as={Flex}
          image={IEPAM}
          p={4}
          css={{ height: '600px' }}
          flexDirection="column"
          justifyContent="flex-end"
        >
          <BackgroundBox
            backgroundColor="opaqueBlack"
            alignSelf="flex-start"
            width={[1, 1, 7 / 10]}
            p={4}
          >
            <Box mb={3}>
              <Text color="white" size={2} bold>
                CRONOS
              </Text>
            </Box>
            <Box>
              <Text color="white" size={2}>
                Cronos es una plataforma de formación, información y servicios
                orientada a Personas Adultas Mayores
              </Text>
            </Box>
          </BackgroundBox>
          <Flex justifyContent={['flex-start', 'flex-start', 'center']} mt={3}>
            {[0, 1, 2].map(index => {
              return (
                <BackgroundBox
                  key={index}
                  backgroundColor="white"
                  mx={2}
                  width="25px"
                  css={{ height: '25px', borderRadius: '50%' }}
                />
              );
            })}
          </Flex>
        </BackgroundBox>
      </Box>

      <Row title="Educación" linkTo="/educacion">
        <Text size={2} color="white">
          Explora y aprende de temas como salud física y mental, vida social, como
          cuidar tu patrimonio, derechos humanos, entre otros.
        </Text>
      </Row>
      <Row title="Bienestar" linkTo="/bienestar">
        <Text size={2} color="white">
          Cátalogo de ofertas por instituciones públicas y privadas que brindan
          descuentos, promociones
        </Text>
      </Row>
      <Row title="Revista Digital" linkTo="/revista">
        <Text size={2} color="white">
          Revista mensual con temas de interés.
        </Text>
      </Row>
      <Row title="Biblioteca Virtual" linkTo="/biblioteca">
        <Text size={2} color="white">
          Recursos bibliograficos e información para todo público y personal del
          Instituto
        </Text>
      </Row>
      <Row title="Ludoteca" linkTo="/ludoteca">
        <Text size={2} color="white">
          Colección de juegos y cuentos.
        </Text>
      </Row>
      {!loggedIn && 
      <MobileMessage flexDirection="column" alignItems="center" as={BackgroundBox} backgroundColor="darkestGray" pb={4}>
        <BackgroundBox width="0" css={{ borderLeft: '2em solid transparent', borderRight: '2em solid transparent', borderTop: '2em solid white' }} />
        <Text size={8} color="white" align="center">
          <Text bold color='white' style={{ fontSize: 'inherit' }} as='span'>Entra</Text>
          {' '} para conocer todos nuestros cursos {' '}
          <Text bold color='white' style={{ fontSize: 'inherit' }} as='span'>gratis</Text>
        </Text>
        <Box mt={3}>
          <Popups
            handleLogin={setLoggedIn}
            current="register"
            triggerElement={
              <FullSizeButton
                size={2}
                bold
                css={{ cursor: 'pointer' }}
              >
                Registrarse ahora
              </FullSizeButton>
            }
          />
        </Box>
      </MobileMessage>
      }
    </Flex>
  );
}

export default HomePage;