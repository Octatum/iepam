import React from 'react';
import Helmet from 'react-helmet';
import AppLayout from '../../components/AppLayout';
import CatalogoCursos from '../../page-components/Educacion/Catalogo';

const Catalogo = () => {
  return (
  <AppLayout>
    <Helmet>
      <title>Catálogo de Cursos</title>
    </Helmet>
    <CatalogoCursos />
  </AppLayout>
  );
};

export default Catalogo;
