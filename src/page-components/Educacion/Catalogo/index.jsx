import React from 'react';
import { Box, Flex } from '@rebass/grid';
import { Link } from 'gatsby';
import styled from 'styled-components';

import BackgroundBox from '../../../components/BackgroundBox';
import Text from '../../../components/Text';
import { breakpoints } from '../../../utils/device';

const FlexGrid = styled(Flex)`
  @media screen and (max-width: ${breakpoints.mobile}px) {
    & > * {
      padding-left: 0;
      padding-right: 0;
    }
  }  

  @media screen and (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet}px) {
    & > :nth-child(3n + 1) {
      padding-left: 0;
    }
    & > :nth-child(3n + 0) {
      padding-right: 0;
    }
    
  } 

  @media screen and (min-width: ${breakpoints.tablet}px) {
    & > :nth-child(4n + 1) {
      padding-left: 0;
    }
    & > :nth-child(4n + 0) {
      padding-right: 0;
    }
  }
`;

const CatLink = styled(Text)`
  padding: 0.25em 1em;
  width: 100%;
  &.active {
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const Arrow = styled(BackgroundBox)`
  border-left: 2em solid transparent;
  border-right: 2em solid transparent;
  border-top: 2em solid ${({ theme }) => theme.color.darkGray};
`;

const CatalogoCursos = ({
  categoria,
  categoriaDesc
}) => {

  return (
    <Flex flexDirection="column">
      <BackgroundBox backgroundColor="darkGray" py={4}>
        <Box px={4} mx="auto" width={[1, 3 / 4, 3 / 4]} mb={3}>
          <Text size={2} color="white" align="center" bold>{categoria}</Text>
        </Box>
        <Box px={4} mx="auto" width={[1, 3 / 4, 3 / 4]}>
          <Text size={2} color="white" align="center">{categoriaDesc}</Text>
        </Box>

        <Flex flexDirection={['column', 'row', 'row']} justifyContent="space-evenly" alignItems="stretch" mt={4} mx={4}>
          <Flex alignItems="center" width={[1]}>
            <CatLink align="center" color="white" bold size={2} as={Link} activeClassName="active" to="/educacion/catalogo/">
              Todos
            </CatLink>
          </Flex>
          <Flex alignItems="center" width={[1]}>
            <CatLink align="center" color="white" bold size={2} as={Link} activeClassName="active" to="/educacion/catalogo/salud-fisica">
              Salud Fisica
            </CatLink>
          </Flex>
          <Flex alignItems="center" width={[1]}>
            <CatLink align="center" color="white" bold size={2} as={Link} activeClassName="active" to="/educacion/catalogo/salud-psicologica">
              Salud Psicologica
            </CatLink>
          </Flex>
          <Flex alignItems="center" width={[1]}>
            <CatLink align="center" color="white" bold size={2} as={Link} activeClassName="active" to="educacion/catalogo/salud-de-vida">
              Salud de Vida
            </CatLink>
          </Flex>
          <Flex alignItems="center" width={[1]}>
            <CatLink align="center" color="white" bold size={2} as={Link} activeClassName="active" to="educacion/catalogo/salud-financiera">
              Salud Financiera
            </CatLink>
          </Flex>
          <Flex alignItems="center" width={[1]}>
            <CatLink align="center" color="white" bold size={2} as={Link} activeClassName="active" to="educacion/catalogo/derechos-humanos">
              Derechos Humanos
            </CatLink>
          </Flex>
        </Flex>
      </BackgroundBox>

      <Arrow alignSelf="center" width="0" />

      <Flex flexDirection="column" mx={4} mt={4}>
        <Box alignSelf="flex-start"><Text bold size={2}>{categoria}</Text></Box>
        <FlexGrid flexDirection="row" alignItems="center" justifyContent="flex-start" flexWrap="wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(data => {
            return <Box width={[1, 1 / 3, 1 / 4]} p={3} key={data}><BackgroundBox pt='100px' backgroundColor="black"></BackgroundBox></Box>
          })}
        </FlexGrid>
      </Flex>

    </Flex>
  )
}

export default CatalogoCursos;