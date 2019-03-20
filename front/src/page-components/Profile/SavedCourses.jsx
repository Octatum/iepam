import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { Link } from 'gatsby';
import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';
import { breakpoints, device } from '../../utils/device';

const SliderArrow = styled('div')`
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
  font-size: 1.5em;
  width: 3rem;

  cursor: pointer;

  ${device.tablet} {
    font-size: 3em;
    width: 5rem;
  }
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

const Shadowed = styled(Flex)`
  box-shadow: 0 5px 10px 1px ${({ theme }) => theme.color.opaqueBlack};
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
    <Shadowed
      my={3}
      flexDirection="column"
      mx={[2, 2, 4]}
      css={{ position: 'relative' }}
    >
      <Clickable to={courseInfo.link} />
      <BackgroundBox backgroundColor="white" p={3}>
        <Text size={2} bold>
          {courseInfo.title}
        </Text>
      </BackgroundBox>

      <BackgroundBox
        image={courseInfo.image}
        p={4}
        width="100%"
        css={{ height: '300px' }}
      />
      <BackgroundBox backgroundColor="darkestGray" p={3}>
        <Text align="center" color="white" size={1}>
          {courseInfo.description}
        </Text>
      </BackgroundBox>
    </Shadowed>
  );
};

const CoursesSlider = ({ coursesLinks, others }) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickPrevArrow />,
    nextArrow: <SlickNextArrow />,
    responsive: [
      {
        breakpoint: breakpoints.tablet,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: breakpoints.mobile,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...sliderSettings} {...others}>
      {coursesLinks.map(element => (
        <Slide key={element.title} courseInfo={element} />
      ))}
    </Slider>
  );
};

export default CoursesSlider;
