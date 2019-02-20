import React from 'react';
import Helmet from 'react-helmet';

import Catalogo from '../../../page-components/Educacion/Catalogo';
import AppLayout from '../../../components/AppLayout';

const SaludFisica = () => (
  <AppLayout>
    <Helmet>
      <title>Catálogo de Cursos</title>
    </Helmet>
    <Catalogo categoria="Salud Fisica" categoriaDesc="Explora y aprende de temas como salud física y mental, vida social, como cuidar tu patrimonio, derechos humanos, entre otros." />
  </AppLayout>
)

export default SaludFisica;