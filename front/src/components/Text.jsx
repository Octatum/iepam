import styled from 'styled-components';
import { device } from '../utils/device';

const defaultSize = 1;
const increments = {
  laptop: 0.3,
  tablet: 0.2,
  mobile: 0.1,
};

const setColor = ({ theme, color }) => {
  return theme.color[color];
};

const setWeight = ({ bold }) => {
  return bold ? '700' : '400';
};

const setFont = ({ theme, fontname = 'main' }) => {
  return theme.font[fontname];
};

function setFontSize({ size = 0 }, increment) {
  return `${defaultSize + increment * size}rem`;
}

const Text = styled.div`
  font-family: ${setFont};
  line-height: 1.2em;
  color: ${setColor};
  font-weight: ${setWeight};
  text-align: ${({ align }) => align};
  text-decoration: none;
  box-sizing: border-box;

  font-size: ${props => setFontSize(props, increments.mobile)};

  ${device.tablet} {
    font-size: ${props => setFontSize(props, increments.tablet)};
  }
  ${device.laptop} {
    font-size: ${props => setFontSize(props, increments.laptop)};
  }
`;

Text.defaultProps = {
  align: 'inherit',
  color: 'black',
  bold: false,
  size: 0,
};

export default Text;
