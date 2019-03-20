import React from 'react';
import { Helmet } from 'react-helmet';
import ExternalLinks from '../../../page-components/Educacion/ExternalLinks';
import AppLayout from '../../../components/AppLayout';

import LandscapeImage from '../../../assets/formaT.png';

const INEADATA = {
  courseProvider: 'FormaT',
  courseLink: 'http://www.ineaformate.conevyt.org.mx/index.php',
  description: `FormaT es un portal educativo destinado a apoyar la formación de las personas que colaboran en los servicios 
                educativos de los Institutos Estatales y Delegaciones del Instituto Nacional para la Educación de los Adultos, INEA`,
  courses: [
    {
      nombre: 'Las enfermedades de hoy, ¿nacen en silencio?',
      link:
        'http://www.cursosinea.conevyt.org.mx/recursos/publicaciones/con_mas_ciencia/002/index.htm',
      courseDescription:
        'Conoce las enfermedades que se estan presentando en México y estan afectando a toda la comunidad.',
    },
    {
      nombre: 'La alimentación',
      link:
        'http://www.cursosinea.conevyt.org.mx/recursos/publicaciones/con_mas_ciencia/001/con_mas_ciencia.html',
      courseDescription:
        'Conoce más acerca de la alimentación en México, y los riesgos de ingerir ciertos alimentos.',
    },
    {
      nombre: 'Carrera por la salud',
      link:
        'http://www.cursosinea.conevyt.org.mx/recursos/juegos/carrera_salud/intro.html',
      courseDescription:
        'Aprende sobre bienestar, nutricion, salud y más por medio de preguntas mientras juegas.',
    },
  ],
  bigImage: LandscapeImage,
};

const INEAPag = () => (
  <AppLayout>
    <Helmet title="INEA" />
    <ExternalLinks {...INEADATA} />
  </AppLayout>
);

export default INEAPag;
