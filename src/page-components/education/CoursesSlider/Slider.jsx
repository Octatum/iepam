import React from 'react';
import styled from 'styled-components';
import Layout from '../../../components/Layout';

import Arrow from '../../../components/Arrow';
import CourseItem from '../../../components/CourseItem';


const SliderLayout = styled(Layout)`
  position: relative;
  overflow-x: hidden;
  user-select: none;
`;

const SliderComponent = styled(Layout)`
  display: flex;
  justify-content: flex-start;
  
  width: ${({ total }) => `${25*total}%`};
  
  transition: transform 1s ease;
  transform: ${({ current, total }) =>
        `translateX(-${(current / total) * 100}%)`};


  height: 500px;
  > * {
    width: 25%;
    margin: 0 1em;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6rem;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  ${({isLeft}) => isLeft ? {left: '0'} : {right: '0'}}
  background-color: ${({ theme }) => theme.color.dark.length === 7 ? theme.color.dark+'AA' : theme.color.dark+'A'}; 

  cursor: pointer;
`;

const Slider = ({ current, items, handleArrowClick}) => {
  return (
    <SliderLayout >
      <SliderComponent current={current} total={items.length} >
        {items.map(data => {
          return <CourseItem text={data.title} src={data.image} key={data.title} />
        })}
      </SliderComponent>

      <ArrowContainer onClick={() => handleArrowClick(false)} isLeft>
        <Arrow color="light" direction="left" scaling={1.5} />
      </ArrowContainer>
      <ArrowContainer onClick={() => handleArrowClick(true)} >
        <Arrow color="light" direction="right" scaling={1.5} />
      </ArrowContainer>
    </SliderLayout>
  )
}

export default Slider;