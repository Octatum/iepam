import React from 'react';
import Helmet from 'react-helmet';

import AppLayout from '../../components/AppLayout';
import ResetPass from '../../page-components/RestorePassword';
import { navigate } from 'gatsby';

const ReestablecerContrasena = ({ location }) => {
  const code = new URLSearchParams(location.search).get('code');

  if (!code) navigate('/')
  
  return (
    <AppLayout>
      <Helmet>
        <title>Reestablece tu contraseña</title>
      </Helmet>
      <ResetPass code={code} />
    </AppLayout>
  );
}

export default ReestablecerContrasena;
