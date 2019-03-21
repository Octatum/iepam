import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Helmet from 'react-helmet';

import BackgroundBox from '../components/BackgroundBox';
import Text from '../components/Text';
import { withButtonStyles } from '../components/Button';
import { graphql } from 'gatsby';
import AppLayout from '../components/AppLayout';

const MyLink = withButtonStyles('a');

const EnlaceExternoTemplate = ({
  data,
  ...other
}) => {
  const { title, link, description, image, cursosexternos } = data.strapiEnlacesexternos;
  const imageSource = image.childImageSharp.original.src;

  return (
    <AppLayout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box {...other}>
        <Flex p={4} flexDirection="column">
          <BackgroundBox width={1} p={3} backgroundColor="darkestGray">
            <Flex>
              <BackgroundBox
                backgroundColor="darkGray"
                image={imageSource}
                css={{ height: '15rem' }}
                width={2 / 5}
                alignSelf="center"
                my={3}
              />
              <Box width={2 / 5} p={3}>
                <Flex flexDirection="column">
                  <Box py={3}>
                    <Text color="white" size={3}>
                      {title}
                    </Text>
                  </Box>
                  <Box py={3}>
                    <Text align="justify" color="white">
                      {description}
                    </Text>
                  </Box>
                  <Box py={3}>
                    <Text
                      size={1}
                      color="white"
                      as="a"
                      target="_blank"
                      href={link}
                    >
                      Ir al sitio
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </BackgroundBox>
        </Flex>
        <Flex px={4}>
          <BackgroundBox
            backgroundColor="darkestGray"
            mr={3}
            p={3}
            width={1 / 3}
          />
          <BackgroundBox backgroundColor="darkestGray" width={1 / 18} />
        </Flex>
        <Box px={4} py={5} pb={6}>
          <Box pl={3} pb={3}>
            <Text size={2} bold>
              Cursos Destacados
            </Text>
          </Box>
          {cursosexternos.map(data => (
            <Box key={data.id} pt={3} my={4}>
              <BackgroundBox backgroundColor="darkGray" p={4} px={3}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box width={2 / 10}>
                    <Text size={1.5} color="white">
                      {data.title}
                    </Text>
                  </Box>
                  <Box width={6 / 10} mx={4}>
                    <Text color="white" size={1}>
                      {data.description}
                    </Text>
                  </Box>
                  <Box width={1 / 10}>
                    <MyLink
                      href={data.link}
                      target="_blank"
                      style={{ width: '100%', boxSizing: 'border-box' }}
                      size={2}
                      kind="dark"
                    >
                      <Text style={{ color: 'inherit' }}>Ver</Text>
                    </MyLink>
                  </Box>
                </Flex>
              </BackgroundBox>
            </Box>
          ))}
        </Box>
      </Box>
    </AppLayout>
  );
};

export default EnlaceExternoTemplate;

export const query = graphql`
query getEnlaces($title: String) {
  strapiEnlacesexternos(title:{eq: $title}) {
    id
    title
    link
    description
    image {
      childImageSharp {
        original {
          src
        }
      }
    }
    cursosexternos {
      id
      title
      description
      link
    }
  }
}
`;