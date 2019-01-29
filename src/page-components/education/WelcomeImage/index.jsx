import React from 'react';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import Text from '../../../components/Text';
import Slider from './Slider';

const ComponentLayout = styled(Layout).attrs({
  paddingHorizontal: 3,
})`
  display: flex;
  justify-content: space-between;
  height: 300px;
  padding: 0 3rem;

  > *:first-child {
    width: 65%;
  }
  > *:last-child {
    width: 30%;
  }
`;

const StaticImage = styled(Layout).attrs({
  paddingHorizontal: 1,
  paddingVertical: 2,
})`
  background: ${({ image, theme }) =>
    `${theme.color.darkGray} url(${image}) no-repeat 100% 100%`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > *:first-child {
    padding-bottom: 1rem;
  }
`;

const WelcomeImage = ({ slides, title, text }) => (
  <ComponentLayout>
    <StaticImage>
      <Text size={2} color="light">
        {title}
      </Text>
      <Text size={1} color="light">
        {text}
      </Text>
    </StaticImage>
    <Slider slides={slides} />
  </ComponentLayout>
);

export default WelcomeImage;
