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
        >
          <BackgroundBox backgroundColor='opaqueBlack' alignSelf="flex-end" width={7 / 10} p={4}>
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
        </BackgroundBox>
        <Flex justifyContent="center" mt={3}>
          <BackgroundBox
            backgroundColor="darkGray"
            mx={2}
            width="20px"
            css={{ height: '20px', borderRadius: '50%' }}
          />
          <BackgroundBox
            backgroundColor="darkGray"
            mx={2}
            width="20px"
            css={{ height: '20px', borderRadius: '50%' }}
          />
          <BackgroundBox
            backgroundColor="darkGray"
            mx={2}
            width="20px"
            css={{ height: '20px', borderRadius: '50%' }}
          />
        </Flex>
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
    </Flex>
  </Box>
);

export default HomePage;
