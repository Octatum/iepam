import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import { Helmet } from 'react-helmet';
import { Flex } from '@rebass/grid';
import Text from '../components/Text';

const BuildingSite = () => (
  <AppLayout>
    <Helmet>
      <title>Esta página está en desarrollo</title>
    </Helmet>
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      css={{ height: '50vh' }}
    >
      <Text size={3} bold>
        Página en Construcción
      </Text>
    </Flex>
  </AppLayout>
);

export default BuildingSite;
