import styled from 'styled-components';

const setColor = ({ theme, color }) => {
  return theme.color[color];
};

const setWeight = ({ bold }) => {
  return bold ? '700' : '400';
};

const setFont = ({ size, theme }) => {
  const x = theme.setFontWithRhythm(theme.font.main, size);
  return x;
};

const Text = styled.div`
  ${setFont};
  color: ${setColor};
  font-weight: ${setWeight};
  text-align: ${({ align }) => align};
  text-decoration: none;
  box-sizing: border-box;
`;

Text.defaultProps = {
  align: 'inherit',
  color: 'black',
  bold: false,
  size: 1,
};

export default Text;
