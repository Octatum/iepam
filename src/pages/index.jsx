import React from 'react';
import Helmet from 'react-helmet';

import AppLayout from '../components/AppLayout';

const IndexPage = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Plataforma educativa</title>
      </Helmet>
    </AppLayout>
  );
};

export default IndexPage;
