import React from 'react';
import { Box, Flex } from '@rebass/grid';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';
import Row from './Row';

const CustomDot = styled(BackgroundBox).attrs({
  backgroundColor:"opaqueBlack" ,
  mx:2,
  width:"25px",
})`
  height: 25px;
  border-radius: 50%;
  .slick-active > & {
    background-color: ${({ theme }) => theme.color.superLightGray};
  }
`;

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dot => (
      <Flex justifyContent={['flex-start', 'flex-start', 'center']}>
        {dot}
      </Flex>
    ),
    customPaging: () => (
        <CustomDot/>
    )
  };

  const PresentationSlides = useStaticQuery(graphql`
    query getHomePresentationSlides {
      allStrapiHomepresentationslides{
        edges{
          node{
            title
            description
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
  const imageData = PresentationSlides.allStrapiHomepresentationslides.edges.map(edge => {
    return { title: edge.node.title, image: edge.node.image.childImageSharp.original.src, description: edge.node.description };
  })


  return (
    <Flex pb={4} flexDirection="column" mx={[0, 0, 4]}>
      <Box mb={4}>
        <Slider {...sliderSettings}>
          {imageData.map(imageInfo => {
            return (
              <Box mb={4} key={imageInfo.title}>
                <BackgroundBox
                  as={Flex}
                  image={imageInfo.image}
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
                      <Text color="white" size={1.5}>
                        {imageInfo.title}
                      </Text>
                    </Box>
                    <Box>
                      <Text color="white" size={1.5}>
                        {imageInfo.description}
                      </Text>
                    </Box>
                  </BackgroundBox>
                </BackgroundBox>
              </Box>
            )
          })}
        </Slider>
      </Box>

      <Row title="Educación" linkTo="/educacion">
        <Text size={1.5} color="white">
          Explora y aprende de temas como salud física y mental, vida social,
          como cuidar tu patrimonio, derechos humanos, entre otros.
        </Text>
      </Row>
      <Row title="Bienestar" linkTo="/bienestar">
        <Text size={1.5} color="white">
          Cátalogo de ofertas por instituciones públicas y privadas que brindan
          descuentos, promociones
        </Text>
      </Row>
      <Row title="Revista Digital" linkTo="/revista">
        <Text size={1.5} color="white">
          Revista mensual con temas de interés.
        </Text>
      </Row>
      <Row title="Biblioteca Virtual" linkTo="/biblioteca">
        <Text size={1.5} color="white">
          Recursos bibliograficos e información para todo público y personal del
          Instituto
        </Text>
      </Row>
      <Row title="Ludoteca" linkTo="/ludoteca">
        <Text size={1.5} color="white">
          Colección de juegos y cuentos.
        </Text>
      </Row>
    </Flex>
  );
};

export default HomePage;
