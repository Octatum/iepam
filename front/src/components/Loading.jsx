import React from 'react';
import styled, { keyframes } from 'styled-components';
import _ from 'lodash';

const spinner = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Spinner = styled('div')`
  color: 'black';
  display: inline-block;
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const SpinnerBar = styled('div')`
  transform-origin: ${({ width, height }) => `${width / 2}px ${height / 2}px`};
  animation: ${spinner} ${({ duration }) => duration}s linear infinite;

  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 29px;
    width: 5px;
    height: 14px;
    border-radius: 20%;
    background: #000;
  }

  transform: ${({ angle }) => `rotate(${angle}deg)`};
  animation-delay: ${({ delay }) => delay}s;
`;

const LoadingIcon = ({ width = 64, height = 64, bars = 12, ...props }) => {

  return (
    <Spinner width={width} height={height} {...props}>
      {_.range(bars).map(key => {
        return <SpinnerBar width={width} height={height} key={key} angle={360 / bars * key} delay={(key - bars) / 10} duration={bars / 10}/>
      })}
    </Spinner>
  )
}

export default LoadingIcon;