import React from 'react';
import { Box, Flex } from '@rebass/grid';
import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';
import { Link } from 'gatsby';
import { withButtonStyles } from '../../components/Button';
import IEPAM from '../../assets/IEPAM.png';

const MyLink = withButtonStyles(Link);

const Row = ({ title, children, linkTo }) => (
  <Flex flexDirection="column" mb={5}>
    <Box mb={3}>
      <Text bold size={5}>
        {title}
      </Text>
    </Box>
    <BackgroundBox as={Flex} backgroundColor="darkGray" p={5} alignItems="center" >
      <Box width={7 / 10}>
        {children}
      </Box>
      <Box width={1 / 10} />
      <Box width={2 / 10} alignSelf="flex-end">
        <MyLink to={linkTo} kind="dark" style={{ cursor: 'pointer' }}>
          <Text size={2} bold style={{ color: 'inherit' }}>
            Ver más...
        </Text>
        </MyLink>
      </Box>

    </BackgroundBox>
  </Flex>
);

const HomePage = () => (
  <Box>
    <Flex py={4} flexDirection="column" mx={4}>
      <Box mb={4}>
        <BackgroundBox
          as={Flex}
          image={IEPAM}
          p={4}
          css={{ height: '600px' }}
          flexDirection="column"
          justifyContent="flex-end"
        >
          <BackgroundBox backgroundColor='opaqueBlack' alignSelf="flex-start" width={7 / 10} p={4}>
            <Box mb={3}>
              <Text color="white" size={2} bold>
                CRONOS
              </Text>
            </Box>
            <Box>
              <Text color="white" size={2}>
                Cronos es una plataforma de formación, información y servicios orientada a Personas Adultas Mayores
              </Text>
            </Box>
          </BackgroundBox>
          <Flex justifyContent="center" mt={3}>
            {[0, 1, 2].map(index => {
              return (
                <BackgroundBox
                  key={index}
                  backgroundColor="white"
                  mx={2}
                  width="25px"
                  css={{ height: '25px', borderRadius: '50%' }}
                />
              )
            })}
          </Flex>
        </BackgroundBox>
      </Box>

      <Row title="Educación" linkTo="/educacion">
        <Text size={2} color="white">
          Explora y aprende de temas como salud física y mental, vida social,
          como cuidar tu patrimonio, derechos humanos, entre otros.
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
          Recursos bibliograficos e información para todo público y personal del Instituto
        </Text>
      </Row>
      <Row title="Ludoteca" linkTo="/ludoteca">
        <Text size={2} color="white">
          Colección de juegos y cuentos.
        </Text>
      </Row>
    </Flex>
  </Box>
);

export default HomePage;
