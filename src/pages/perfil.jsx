import React from 'react';
import Helmet from 'react-helmet';

import Profile from '../page-components/Profile';
import AppLayout from '../components/AppLayout';

const MyProfilePage = () => (
  <AppLayout>
    <Helmet>
      <title>
        Mi perfil
      </title>
    </Helmet>
    <Profile />
  </AppLayout>
) 

export default MyProfilePage;