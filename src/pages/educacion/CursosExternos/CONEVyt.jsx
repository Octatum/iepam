import React from 'react';
import { Helmet } from 'react-helmet';
import ExternalLinks from '../../../page-components/Educacion/ExternalLinks';
import AppLayout from '../../../components/AppLayout';

import LandscapeImage from '../../../assets/conevyt_h.png';

const CONEVYTDATA = {
  courseProvider: 'CONEVyt',
  courseLink: ' https://www.conevyt.org.mx/',
  description: `El CONEVyT es una comisión de carácter permanente con visión sistémica y globalizadora,
                sin compromiso directo de proporcionar servicios educativos, con fuerza legal e institucional para organizar, 
                coordinar, promover y evaluar programas, mecanismos y servicios de educación para la vida y el trabajo`,
  courses: [
    {
      nombre: 'Primeros auxilios',
      link: 'https://www.conevyt.org.mx/index.php?option=com_content&view=article&id=448&Itemid=856'
    },
    {
      nombre: 'Educación para tu trabajo',
      link: 'https://www.conevyt.org.mx/index.php?option=com_content&view=article&id=421&Itemid=800'
    },
    {
      nombre: 'Administra tu gasto',
      link: 'https://www.conevyt.org.mx/index.php?option=com_content&view=article&id=447&Itemid=855'
    }
  ],
  bigImage: LandscapeImage,
}

const ConevytPag = () => (
  <AppLayout>
    <Helmet title="CONEVyt" />
    <ExternalLinks {...CONEVYTDATA} />
  </AppLayout>
)

export default ConevytPag;