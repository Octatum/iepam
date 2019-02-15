import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import BackgroundBox from '../../../components/BackgroundBox';
import Text from '../../../components/Text';
import { Link } from 'gatsby';

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

const Clickable = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
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

const Slide = ({ courseInfo }) => {
  return (
    <Flex flexDirection="column" mx={4} css={{ position: 'relative' }}>
      <Clickable to={courseInfo.link} />
      <BackgroundBox
        image={courseInfo.image}
        p={4}
        width="100%"
        css={{ height: '300px', border: '2px solid #0004' }}
      >
        {/* <Text color="white" align="center">
          {courseInfo.title}
        </Text> */}
      </BackgroundBox>
    </Flex>
  );
};

const CoursesSlider = ({ coursesLinks }) => {
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
      {coursesLinks.map(element => (
        <Slide key={element.title} courseInfo={element} />
      ))}
    </Slider>
  );
};

export default CoursesSlider;
