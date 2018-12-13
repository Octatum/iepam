import styled from 'styled-components'

const setFont = ({ size, theme }) => {
  const x = theme.setFontWithRhythm(theme.font.main, size);
  return x;
};

const Button = styled('button')`
  ${setFont};
  border-color: ${({theme}) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
  padding: 0.5rem 1rem;
  background-color: ${({theme}) => theme.color.light};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
  
  :hover {
    background-color: ${({theme}) => theme.color.black};
    color: ${({theme}) => theme.color.light};
  }

  ${({ theme, kind }) => kind === "dark" && `
    background-color: ${theme.color.black};
    color: ${theme.color.light};
    
    :hover {
      background-color: ${theme.color.light};
      color: ${theme.color.black};
    }
  `}
`;

Button.defaultProps = {
  size: 1,
};

export default Button;