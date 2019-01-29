import styled from 'styled-components';

export const withButtonStyles = component => styled(component)`
  border-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;

  :hover {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.light};
  }

  ${({ theme, kind }) =>
    kind === 'dark' &&
    `
    background-color: ${theme.color.black};
    color: ${theme.color.light};
    
    :hover {
      background-color: ${theme.color.light};
      color: ${theme.color.black};
    }
  `}
`;

const Button = withButtonStyles('button');

Button.defaultProps = {
  size: 1,
};

export default Button;
