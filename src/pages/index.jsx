import React from 'react';
import Helmet from 'react-helmet';

import AppLayout from '../components/AppLayout';

const IndexPage = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Instituto Estatal Por el Adulto Mayor</title>
      </Helmet>
    </AppLayout>
  );
};

export default IndexPage;
