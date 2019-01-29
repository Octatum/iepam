import React from 'react';
import AppLayout from '../components/AppLayout';

import CoursesSlider from '../page-components/education/CoursesSlider';
import WelcomeImage from '../page-components/education/WelcomeImage';

const EducationPage = () => {
  const destacados = [{
    title: 'this is course 1', image: 'imageURL'
  },
  {
    title: 'this is course 2', image: 'imageURL'
  },
  {
    title: 'this is course 3', image: 'imageURL'
  },
  {
    title: 'this is course 4', image: 'imageURL'
  },
  {
    title: 'this is course 5', image: 'imageURL'
  },
  {
    title: 'this is course 6', image: 'imageURL'
  },
  {
    title: 'this is course 7', image: 'imageURL'
  },
  {
    title: 'this is course 8', image: 'imageURL'
  }
]

  return (
    <AppLayout>
      <WelcomeImage text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " title="Lorem Ipsum is simply dummy text"/>
      <CoursesSlider title="Cursos destacados" items={destacados} />
    </AppLayout>
  )
}

export default EducationPage;