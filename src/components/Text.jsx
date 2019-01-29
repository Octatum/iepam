import styled from 'styled-components';

const setColor = ({ theme, color }) => {
  return theme.color[color];
};

const setWeight = ({ bold }) => {
  return bold ? '700' : '400';
};

const setFont = ({ theme, fontname = 'main' }) => {
  return theme.font[fontname];
};

const setFontSize = ({ theme, size = 0 }) => {
  return `${1 + size * theme.fontIncrement.desktop}em`;
};

const Text = styled.div`
  font-family: ${setFont};
  font-size: ${setFontSize};
  line-height: 1.2em;
  color: ${setColor};
  font-weight: ${setWeight};
  text-align: ${({ align }) => align};
  text-decoration: none;
`;

Text.defaultProps = {
  align: 'inherit',
  color: 'black',
  bold: false,
  size: 0,
};

export default Text;
