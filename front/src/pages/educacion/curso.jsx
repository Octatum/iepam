import React from 'react';
import Helmet from 'react-helmet';
import AppLayout from '../../components/AppLayout';
import Curso from '../../page-components/Educacion/Curso';

const PagCurso = () => {
  return (
    <AppLayout>
      <Helmet title="Página de curso" />
      <Curso />
    </AppLayout>
  );
};

export default PagCurso;
