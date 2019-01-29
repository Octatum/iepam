import React from 'react';
import Helmet from 'react-helmet';
import AppLayout from '../../components/AppLayout';
import { Flex, Box } from '@rebass/grid';

import styled from 'styled-components';
import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';

const ScrollBox = styled(Box)`
  overflow-y: scroll;
  height: 100%;
`;

const Visualizador = () => {
  return (
    <AppLayout>
      <Helmet title="Visualizador" />
      <Flex>
        <BackgroundBox backgroundColor="darkGray" width={3 / 5} p={3}>
          <BackgroundBox backgroundColor="white" css={{ height: '27rem' }} />
        </BackgroundBox>
        <BackgroundBox
          backgroundColor="darkestGray"
          width={2 / 5}
          pl={4}
          css={{ minHeight: '100%' }}
        >
          <Flex
            flexDirection="column"
            css={{ minHeight: '100%', maxHeight: '100%' }}
          >
            <BackgroundBox px={1} py={3} backgroundColor="darkGray">
              <Text color="white" size={3}>
                Nombre del curso 1
              </Text>
            </BackgroundBox>
            <ScrollBox py={4}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                <Box py={2}>
                  <Text size={1} color="white" key={item}>
                    {item} Tema Lorem Ipsum is a dummy text
                  </Text>
                </Box>
              ))}
            </ScrollBox>
          </Flex>
        </BackgroundBox>
      </Flex>
    </AppLayout>
  );
};

export default Visualizador;
