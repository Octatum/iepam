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

/*
<div class="lds-spinner">
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
</div>
*/

/*
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-spinner div {
  transform-origin: 32px 32px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 29px;
  width: 5px;
  height: 14px;
  border-radius: 20%;
  background: #fff;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

*/