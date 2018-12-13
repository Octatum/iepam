import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import Text from '../components/Text';

const Layout = styled('div')`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const NotFoundPage = () => (
  <AppLayout>
    <Helmet>
      <title>Plataforma educativa</title>
    </Helmet>
    <Layout>
      <Text size={3} bold>¡Ooops!</Text>
      <Text size={8} bold>404</Text>
      <Text as="h1" size={2}>
        ¡No he encontrado nada!
      </Text>
    </Layout>
  </AppLayout>
);

export default NotFoundPage;
