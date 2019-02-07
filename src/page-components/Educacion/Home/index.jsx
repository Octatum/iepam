import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import AppLayout from '../../../components/AppLayout';
import Text from '../../../components/Text';
import GatsbyLink from 'gatsby-link';
import CoursesSlider from './CoursesSlider';

import conevytImage from '../../../assets/conevyt.png'
import INEAImage from '../../../assets/ineaPort.png'

const GrayBox = styled(Box)`
  background: ${({ theme }) => theme.color.darkGray};
  box-sizing: border-box;
`;

const InicioEducacion = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Plataforma educativa</title>
      </Helmet>
      <Flex css={{ height: '25rem' }} p={4}>
        <GrayBox width={16 / 24} p={4} py={5}>
          <Flex
            css={{ height: '100%' }}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Box py={3}>
              <Text size={3} color="white" bold>
                Lorem ipsum
              </Text>
            </Box>
            <Box width={5 / 6}>
              <Text color="white" align="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </Text>
            </Box>
          </Flex>
        </GrayBox>
        <GrayBox width={6 / 24} ml="auto" p={4} py={5}>
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            css={{ height: '100%' }}
          >
            <Box py={3}>
              <Text size={2} align="center" color="white" bold>
                Lorem ipsum is
              </Text>
            </Box>
            <Text align="center" color="white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </Text>
          </Flex>
        </GrayBox>
      </Flex>
      <Flex py={4} flexDirection="column">
        <Box px={4} pb={4}>
          <Text bold size={2}>
            Cursos destacados
          </Text>
        </Box>
        <Box>
          <CoursesSlider coursesLinks={[
            {
              link: '/educacion/CursosExternos/CONEVyt', 
              title: 'CONEVyt',
              image: conevytImage
            },
            {
              link: '/educacion/CursosExternos/INEA',
              title: 'INEA',
              image: INEAImage
            }
          ]}/>
        </Box>

        <Box px={4} py={3}>
          <Text align="right" bold>
            <GatsbyLink to="/educacion/curso">Ver más...</GatsbyLink>
          </Text>
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default InicioEducacion;
