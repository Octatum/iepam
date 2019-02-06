import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import BackgroundBox from '../../../components/BackgroundBox';
import Text from '../../../components/Text';
import Conevyt from '../../../assets/conevyt.png';

const SliderArrow = styled('div')`
  font-size: 3em;
  z-index: 10;
  color: ${({ theme }) => theme.color.white};
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 5rem;
  cursor: pointer;
`;

const LeftArrow = styled(SliderArrow)``;

const RightArrow = styled(SliderArrow)`
  right: 0;
`;

const SlickPrevArrow = ({ onClick }) => (
  <LeftArrow onClick={onClick}>
    <div>◀</div>
  </LeftArrow>
);

const SlickNextArrow = ({ onClick }) => (
  <RightArrow onClick={onClick}>
    <div>▶</div>
  </RightArrow>
);

const Slide = () => {
  return (
    <Flex flexDirection="column" mx={4}>
      {/* <BackgroundBox backgroundColor="darkGray" py={6} /> */}
      <BackgroundBox /* backgroundColor="darkestGray" */ image={Conevyt} p={4} width="400px" css={{height: '300px'}}>
        <Text color="white" align="center">
          Lorem ipsum is dummy text
        </Text>
      </BackgroundBox>
    </Flex>
  );
};

const CoursesSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickPrevArrow />,
    nextArrow: <SlickNextArrow />,
  };
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map(element => (
        <Slide key={element} />
      ))}
    </Slider>
  );
};

export default CoursesSlider;
