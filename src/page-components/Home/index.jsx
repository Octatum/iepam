import React from 'react';
import { Box, Flex } from '@rebass/grid';
import Text from '../../components/Text';
import GatsbyLink from 'gatsby-link';
import BackgroundBox from '../../components/BackgroundBox';

const Row = ({ title, children, linkTo }) => (
  <Flex flexDirection="column">
    <Box px={4} pb={4}>
      <Text bold size={2}>
        {title}
      </Text>
    </Box>
    <Box px={4}>
      {children}
    </Box>

    <Box px={4} py={3}>
      <Text align="right" bold>
        <GatsbyLink to={linkTo}>Ver más...</GatsbyLink>
      </Text>
    </Box>
  </Flex>
)

const HomePage = () => (
  <Box>
    <Flex py={4} flexDirection="column">
      <Row title="Educación" linkTo="/educacion">
        <Text size={2}>
          Explora y aprende de temas como salud física y mental, vida social, como cuidar tu patrimonio, derechos humanos, entre otros.
        </Text>
      </Row>
      <Row title="Bienestar" linkTo="/bienestar">
        <Text size={2}>
          Cátalogo de ofertas por instituciones públicas y privadas que brindan descuentos, promociones        
        </Text>
      </Row>
    </Flex>
  </Box>
)

export default HomePage;