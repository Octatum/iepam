import React from 'react';
import styled from 'styled-components';

import Text from './Text';

export const withButtonStyles = component => styled(component)`
  border-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;

  :hover {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }

  ${({ theme, kind }) =>
    kind === 'dark' &&
    `
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    
    :hover {
      background-color: ${theme.color.white};
      color: ${theme.color.black};
    }
  `}
`;

const _Button = withButtonStyles('button');

function Button({ children, className, kind, style, as, onClick, ...other }) {
  return (
    <_Button style={style} className={className} as={as} kind={kind} onClick={onClick}>
      <Text style={{ color: 'inherit' }} {...other}>
        {children}
      </Text>
    </_Button>
  );
}

export default Button;
