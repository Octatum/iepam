import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import AppLayout from '../../../components/AppLayout';
import Text from '../../../components/Text';
import CoursesSlider from './CoursesSlider';

//import { withButtonStyles } from '../../../components/Button';
import { /* Link,  */useStaticQuery, graphql } from 'gatsby';

const GrayBox = styled(Box)`
  background: ${({ theme }) => theme.color.darkGray};
  box-sizing: border-box;
`;

//const MyLink = withButtonStyles(Link);

const InicioEducacion = () => {
  const cursos = useStaticQuery(graphql`
    query getExternalLinkData {
      allStrapiEnlacesexternos{
        edges{
          node{
            title
            image {
              childImageSharp{
                original{
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  const externalSourceData = cursos.allStrapiEnlacesexternos.edges.map(edge => {
    return {title: edge.node.title, image: edge.node.image.childImageSharp.original.src, link: `educacion/cursos-externos/${edge.node.title}`}
  })

  return (
    <AppLayout>
      <Helmet>
        <title>Plataforma educativa</title>
      </Helmet>
      <Flex
        alignItems={['initial', 'initial', 'stretch']}
        p={[0, 0, 4]}
        flexDirection={['column', 'row', 'row']}
      >
        <GrayBox width={[1, 2 / 3, 2 / 3]} p={4} py={5}>
          <Flex
            css={{ height: '15rem' }}
            flexDirection="column"
            justifyContent={['flex-start', 'flex-start', 'flex-start']}
          >
            <Box py={3}>
              <Text size={2} color="white" bold>
                Educación
              </Text>
            </Box>
            <Box width={5 / 6}>
              <Text size={1.5} color="white" align="justify">
                Explora y aprende de temas como salud física y mental, vida
                social, como cuidar tu patrimonio, derechos humanos, entre
                otros.
              </Text>
            </Box>
          </Flex>
        </GrayBox>
        <GrayBox width={[1, 1 / 3, 1 / 3]} ml="auto" p={4} py={5}>
          <Flex
            flexDirection="column"
            justifyContent={['center', 'center', 'center']}
            alignItems={['center', 'center', 'initial']}
            css={{ height: '15rem' }}
          >
            <Box py={3}>
              <Text size={2} align="center" color="white" bold>
                Bienvenida
              </Text>
            </Box>
            <Text size={1.5} align="center" color="white">
              Explora nuestra selección de cursos y material didáctico
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
          <CoursesSlider coursesLinks={externalSourceData} />
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
