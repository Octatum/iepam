import React from 'react';
import { Helmet } from 'react-helmet';
import ExternalLinks from '../../../page-components/Educacion/ExternalLinks';
import AppLayout from '../../../components/AppLayout';

import LandscapeImage from '../../../assets/nih_h.png';

const NIHData = {
  courseProvider: 'National Institute of Aging',
  courseLink: 'https://www.nia.nih.gov/health/espanol/temas',
  description: `El Instituto Nacional sobre el Envejecimiento es una división de los Institutos Nacionales de Salud de los Estados Unidos de América. `,
  courses: [
    {
      nombre: 'Ejercicios de fortalecimiento para adultos mayores',
      link:
        'https://www.nia.nih.gov/health/ejercicios-fortalecimiento-adultos-mayores',
      courseDescription: 'Ejercicios hechos en casa para mantenerse activo',
    },
    {
      nombre: 'Ejercicios de flexibilidad para adultos mayores',
      link:
        'https://www.nia.nih.gov/health/ejercicios-flexibilidad-adultos-mayores',
      courseDescription:
        'Ejercicios para conseguir mas libertad de movimiento para sus actividades físicas y diarias.',
    },
    {
      nombre: 'Ejercicios de resistencia para adultos',
      link:
        'https://www.nia.nih.gov/health/ejercicios-resistencia-adultos-mayores',
      courseDescription: 'Mejora el desempeño de tus actividades diarias como la jardíneria, ir de compras o practicar deporte.',
    },
    
  ],
  bigImage: LandscapeImage,
};

const NIHPage = () => (
  <AppLayout>
    <Helmet title="NIH" />
    <ExternalLinks {...NIHData} />
  </AppLayout>
);

export default NIHPage;
