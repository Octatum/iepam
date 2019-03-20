import React from 'react';
import Helmet from 'react-helmet';
import AppLayout from '../../components/AppLayout';

import Visualizador from '../../page-components/Educacion/Visualizador';

const VisualizadorPage = () => {
  return (
    <AppLayout>
      <Helmet title="Visualizador" />
      <Visualizador />
    </AppLayout>
  );
};

export default VisualizadorPage;
