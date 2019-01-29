import React from 'react';
import Helmet from "react-helmet";
import AppLayout from '../../components/AppLayout';
import { Flex, Box } from '@rebass/grid';
import BackgroundBox from '../../components/BackgroundBox';
import Text from '../../components/Text';
import styled from 'styled-components';
import Button from '../../components/Button';
import GatsbyLink from 'gatsby-link';

const ProgressCircle = styled('div')`
  background-color: ${({theme}) => theme.color.darkGray}; 
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  --radius: 6em;
  height: var(--radius);
  width: var(--radius);
`;

const Curso = () => {
  return (
    <AppLayout>
      <Helmet title="Página de curso" />
      <Flex p={4} flexDirection="column">
        <BackgroundBox width={1} p={3} backgroundColor="darkestGray">
          <Flex>
            <BackgroundBox backgroundColor="darkGray" css={{ height: '15rem'}} width={2/5} />
            <Box width={2/5} p={3}>
              <Flex flexDirection="column">
                <Box py={3}>
                  <Text color="white" size={3}>Nombre del curso 1</Text>
                </Box>
                <Box py={3}>
                  <Text align="justify" color="white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati atque similique tempore eligendi unde praesentium eos, optio commodi animi eaque quam nulla error natus nobis! Accusantium quae eos iure non enim voluptate blanditiis.</Text>
                </Box>
              </Flex>
            </Box>
            <Box width={1/5}>
              <Flex alignItems="center" justifyContent="center" css={{height: '100%'}}>
                <ProgressCircle>
                  <Text size={3} color="white">100%</Text>
                </ProgressCircle>
              </Flex>
            </Box>
          </Flex>
        </BackgroundBox>
        <BackgroundBox p={4} backgroundColor="darkGray">
          <Flex>
            {[1, 2, 3, 4, 5].map(key => (
              <Box key={key} pr={4}>
                <Text color="white">Sección título {key}</Text>
              </Box>
            ))}
          </Flex>
        </BackgroundBox>
      </Flex>
      <Flex px={4}>
        <BackgroundBox backgroundColor="darkestGray" mr={3} p={3} width={1/3} />
        <BackgroundBox backgroundColor="darkestGray" width={1/18} />
      </Flex>
      <Box px={4} py={5} pb={6}>
        {[1, 2, 3, 4].map(key => (
          <Box key={key} pt={3}>
            <Box pl={3} pb={3}>
              <Text size={2} bold>Nombre del tema {key}</Text>
            </Box>
            <BackgroundBox backgroundColor="darkGray" p={4} px={3}>
              <Flex alignItems="center">
                <Box width={1/10}>
                  <Text size={2} color="white">Tema</Text>
                </Box>
                <Box width={8/10}>
                  <Text color="white" size={2}>Lorem ipsum is dummy text</Text>
                </Box>
                <Box width={1/10}>
                  <Button style={{ width: '100%' }} size={2} kind="dark">
                    ver
                  </Button>
                </Box>
              </Flex>
            </BackgroundBox>
          </Box>
        ))}
      </Box>
    </AppLayout>
  );
}

export default Curso;
