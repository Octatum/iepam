import React from 'react';
import Helmet from 'react-helmet';
import AppLayout from '../../components/AppLayout';
import { Flex, Box } from '@rebass/grid';
import BackgroundBox from '../../components/BackgroundBox';
import Text from '../../components/Text';
import styled from 'styled-components';
import Button from '../../components/Button';
import GatsbyLink from 'gatsby-link';
import Curso from '../../page-components/Educacion/Curso';

const ProgressCircle = styled('div')`
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  --radius: 6em;
  height: var(--radius);
  width: var(--radius);
`;

const PagCurso = () => {
  return (
    <AppLayout>
      <Helmet title="Página de curso" />
      <Curso />
    </AppLayout>
  );
};

export default PagCurso;
