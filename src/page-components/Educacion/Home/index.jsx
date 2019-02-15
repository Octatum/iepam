import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import AppLayout from '../../../components/AppLayout';
import Text from '../../../components/Text';
import CoursesSlider from './CoursesSlider';

import { courses } from './ExternalLinks';
import Button, { withButtonStyles } from '../../../components/Button';
import { Link } from 'gatsby';

const GrayBox = styled(Box)`
  background: ${({ theme }) => theme.color.darkGray};
  box-sizing: border-box;
`;

const MyLink = withButtonStyles(Link);

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
                Educación
              </Text>
            </Box>
            <Box width={5 / 6}>
              <Text size={2} color="white" align="justify">
                Explora y aprende de temas como salud física y mental, vida
                social, como cuidar tu patrimonio, derechos humanos, entre
                otros.
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
              <Text size={3} align="center" color="white" bold>
                Bienvenida
              </Text>
            </Box>
            <Text size={2} align="center" color="white">
              Explora nuestra selección de cursos y material didáctico
            </Text>
          </Flex>
        </GrayBox>
      </Flex>
      <Flex py={4} flexDirection="column">
        <Box px={4} pb={4}>
          <Text bold size={3}>
            Cursos destacados
          </Text>
        </Box>
        <Box>
          <CoursesSlider coursesLinks={courses} />
        </Box>

        <Box px={4} py={3} alignSelf="flex-end">
          {/* <MyLink
            to="/educacion/curso"
            kind="dark"
            style={{ cursor: 'pointer' }}
          >
            <Text size={2} style={{ color: 'inherit' }}>
              Ver más...
            </Text>
          </MyLink> */}
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default InicioEducacion;
