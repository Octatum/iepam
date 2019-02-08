import React from 'react';
import { Helmet } from 'react-helmet';
import ExternalLinks from '../../../page-components/Educacion/ExternalLinks';
import AppLayout from '../../../components/AppLayout';

import LandscapeImage from '../../../assets/inea_h.png';

const INEADATA = {
  courseProvider: 'INEA',
  courseLink: 'http://www.cursosinea.conevyt.org.mx/',
  description: `El INEA propone y desarrolla modelos educativos, realiza investigaciones sobre la materia, 
                elabora y distribuye materiales didácticos, aplica sistemas para la evaluación del aprendizaje de los adultos, 
                así como acredita y certifica la educación básica para adultos y jóvenes de 15 años y más que no hayan cursado o concluido dichos estudios`,
  courses: [
    {
      nombre: 'México en nuestro hogar',
      link: 'http://www.cursosinea.conevyt.org.mx/cursos/mexico/index.html',
      courseDescription: 'Curso para aprender acerca de la situación actual de nuestro país',
    },
    {
      nombre: 'Crédito para mi negocio',
      link: 'http://www.cursosinea.conevyt.org.mx/cursos/creditneg/bienvenida.htm',
      courseDescription: 'Técnicas para solicitar y conseguir financiamiento'
    },
    {
      nombre: 'Vida y salud',
      link: 'http://www.cursosinea.conevyt.org.mx/cursos/vidaysalud1_1/bienvenida.htm',
      courseDescription: 'Descubre como mejorar tu salud integral'
    }
  ],
  bigImage: LandscapeImage,
}

const INEAPag = () => (
  <AppLayout>
    <Helmet title="INEA" />
    <ExternalLinks {...INEADATA} />
  </AppLayout>
)

export default INEAPag;