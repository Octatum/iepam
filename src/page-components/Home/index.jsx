import React from 'react';
import { Box, Flex } from '@rebass/grid';
import Text from '../../components/Text';
import GatsbyLink from 'gatsby-link';
import BackgroundBox from '../../components/BackgroundBox';

const Row = ({ title, children, linkTo }) => (
  <Flex flexDirection="column">
    <Box pb={4}>
      <Text bold size={2}>
        {title}
      </Text>
    </Box>
    <Box>
      {children}
    </Box>

    <Box py={3}>
      <Text align="right" bold>
        <GatsbyLink to={linkTo}>Ver más...</GatsbyLink>
      </Text>
    </Box>
  </Flex>
)

const HomePage = () => (
  <Box>
    <Flex py={4} flexDirection="column" mx={4}>
      <Box mb={4}>
        <BackgroundBox as={Flex} backgroundColor="darkGray" p={4} css={{height:"400px"}}>
          <Box alignSelf="flex-end" width={1 / 2}>
            <Box mb={3}>
              <Text color="white" sixe={2} bold>Lorem Ipsum is simply dummy text</Text>
            </Box>
            <Box>
              <Text color="white" sixe={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </Text>
            </Box>
          </Box>
        </BackgroundBox>
        <Flex justifyContent="center" mt={3}>
          <BackgroundBox backgroundColor="darkGray" mx={2} width="20px" css={{height:"20px", borderRadius:"50%"}} />
          <BackgroundBox backgroundColor="darkGray" mx={2} width="20px" css={{height:"20px", borderRadius:"50%"}} />
          <BackgroundBox backgroundColor="darkGray" mx={2} width="20px" css={{height:"20px", borderRadius:"50%"}} />
        </Flex>
      </Box>

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