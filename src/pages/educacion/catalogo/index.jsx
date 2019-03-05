import React from 'react';
import Helmet from 'react-helmet';
import Catalogo from '../../../page-components/Educacion/Catalogo';
import AppLayout from '../../../components/AppLayout';

const CatalogoDeCursos = () => (
  <AppLayout>
    <Helmet>
      <title>Catálogo de Cursos</title>
    </Helmet>
    <Catalogo
      categoria="Bienvenidos"
      categoriaDesc="Bienvenidos a la plataforma de aprendizaje."
    />
  </AppLayout>
);

export default CatalogoDeCursos;
