import styled, {withTheme} from 'styled-components';

const setDirection = ({ direction, color, theme }) => {
  if (direction === 'up') {
    return {
      'border-left': '1rem solid transparent',
      'border-right': '1rem solid transparent',
      'border-bottom': `1.5rem solid ${theme.color[color]}`,
    }
  }
  if (direction === 'down') {
    return {
      'border-left': '1rem solid transparent',
      'border-right': '1rem solid transparent',
      'border-top': `1.5rem solid ${theme.color[color]}`,
    }
  }
  if (direction === 'left') {
    return {
      'border-top': '1rem solid transparent',
      'border-bottom': '1rem solid transparent',
      'border-right': `1.5rem solid ${theme.color[color]}`,
    }
  }
  if (direction === 'right') {
    return {
      'border-top': '1rem solid transparent',
      'border-bottom': '1rem solid transparent',
      'border-left': `1.5rem solid ${theme.color[color]}`,
    }
  }
}

const Arrow = styled.div`
  width: 0;
  height: 0;
  cursor: pointer;
  position: relative;

  ${setDirection};
  transform: ${({ scaling }) => `scale(${scaling})`};
`;


Arrow.defaultProps = {
  direction: 'left',
  color: 'black',
  scaling: 1,
}

export default withTheme(Arrow);