import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import Text from '../../../components/Text';
import Button from '../../../components/Button';
import BackgroundBox from '../../../components/BackgroundBox';
import Dropdown from './Dropdown';

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

const Curso = () => {
  return (
    <Box>
      <BackgroundBox backgroundColor="darkestGray" py={4} px={3}>
        <Text size={2} color="white" bold align="center">Lorem ipsum dolor sit amet.</Text>
      </BackgroundBox>
      
      <Dropdown description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum?" title="Curso 1" link="/" />
      <Dropdown description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum?" title="Curso 2" link="/" />
      <Dropdown description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum?" title="Curso 3" link="/" />
      <Dropdown description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum?" title="Curso 4" link="/" />
      <Dropdown description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum?" title="Curso 5" link="/" />

      <Box>
        <Text bold size={2}>Lorem Ipsum is simply dummy text</Text>
      </Box>
      <Box my={2}>
        <Text size={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora, tempore sunt fugiat soluta pariatur saepe aliquid expedita blanditiis eligendi!</Text>
      </Box>
      <Box my={2}>
        <Text size={2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur asperiores nisi repudiandae ad sapiente incidunt sequi placeat perspiciatis doloremque, consectetur sit assumenda aliquid doloribus voluptatum cupiditate pariatur recusandae ipsa magni.</Text>
      </Box>

      <Box my={5}>
        {/* Video */}
      </Box>

      <Text align="center" bold size={2}>Lorem Ipsum is simply dummy text</Text>
      <BackgroundBox backgroundColor="black" p={3} width={'200px'} mx='auto' mt={3} mb={5}>
        <Text color="white" align="center" size={2}>Educacion</Text>
      </BackgroundBox>
    </Box>
  );
};

export default Curso;
