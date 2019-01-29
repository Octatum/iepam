import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from './Text';
import Layout from './Layout';

const ContainerLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  position: relative;

  & > *:last-child  {
    height: 30%;
    background-color: ${({ theme }) => theme.color.dark};
    text-align: center;
    padding: 1rem;
    margin-bottom: 0;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 70%;
  object-fit: cover;

  height: 70%;
  background-color: ${({ theme }) => theme.color.darkGray};
`;

const Clickable = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const CourseItem = ({ text }) => (
  <ContainerLayout>
    <Clickable href="#" />
    <Image />
    <Text color='light' size={2}>{text}</Text>
  </ContainerLayout>
)

CourseItem.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
}

export default CourseItem;