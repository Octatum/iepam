import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { Flex, Box } from '@rebass/grid';
import Button from './Button';
import SuggestionBox from './Popups/SuggestionBox';
import { Link } from 'gatsby';
import { device } from '../utils/device';


const FlexLayout = styled(Flex)`
  background: ${({ theme }) => theme.color.footer};
`;


const AllHeight = styled.div`
  .popup-content {
    max-height: 80vh;
    overflow: auto;

    width: calc(100% - 3rem) !important;

    ${device.tablet} {
      width: 80% !important;
    }
    ${device.laptop} {
      width: 1200px !important;
      max-height: 90vh;
    }
  }
`;

const Footer = () => {
  return (
    <footer>
      <FlexLayout px={6} pt={5} flexDirection="column" >
        <Flex width={1} my={4}>
          <Box mx={4} width={1 / 3}>
            <Box mb={3}>
              <Text size={2} bold>Sugerencias y Comentarios</Text>
            </Box>
            <AllHeight>
              <SuggestionBox
              triggerElement={
                <Button kind="dark" size={1} css={{ cursor: 'pointer', padding: "1em 1.5em" }}>
                  Buzón de Sugerencias
                </Button>
              }
            />

            </AllHeight>
          </Box>
          <Box mx={4} width={1 / 3}>
              <Box mb={3}>
                <Text size={2} bold>Compromiso</Text>
              </Box>
              <Text size={1}>Nuestra misión es ejecutar, coordinar y promover ls políticas, programas, acciones y estrategis para el desarrollo integral de las Personas Adultas Mayores de Nuevo León</Text>
          </Box>
          <Box mx={4} width={1 / 3}>
              <Box mb={3}>
                <Text size={2} bold>Secciones</Text>
              </Box>
              <Flex css={{flexWrap: 'wrap'}}>
                <Box width={1 / 2} mb={2}><Text size={1} as={Link} to="/educacion">Educación</Text></Box>
                <Box width={1 / 2} mb={2}><Text size={1} as={Link} to="/biblioteca">Biblioteca</Text></Box>
                <Box width={1 / 2} mb={2}><Text size={1} as={Link} to="/bienestar">Bienestar</Text></Box>
                <Box width={1 / 2} mb={2}><Text size={1} as={Link} to="/ludoteca">Ludoteca</Text></Box>
                <Box width={1 / 2} mb={2}><Text size={1} as={Link} to="/revista">Revista</Text></Box>
              </Flex>
          </Box>
        </Flex>
        <Box mb={1}>
          <Text size={1} align="center">
            <Text as="span" size={1} bold>IEPAM</Text>
            {' '} &bull; (81) 2723 0982 &bull; Madrid 207, Mirador, C.P. 64910, Monterrey, N.L.
          </Text>
        </Box>
        <Box mb={4}>
          <Text size={0.5} align="center">
            &copy;Instituto Estatal de las Personas Adultas Mayores
          </Text>
        </Box>
      </FlexLayout>
    </footer>
  );
};

export default Footer;
