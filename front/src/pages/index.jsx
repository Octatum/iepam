import React from 'react';
import Helmet from 'react-helmet';

import AppLayout from '../components/AppLayout';
import HomePage from '../page-components/Home';

const IndexPage = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Instituto Estatal Por el Adulto Mayor</title>
      </Helmet>
      <HomePage />
    </AppLayout>
  );
};

export default IndexPage;
