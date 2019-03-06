import React from 'react';
import styled from 'styled-components';
import BackgroundBox from '../BackgroundBox';
import { Link } from 'gatsby';
import Text from '../Text';

const NavbarItem = styled(BackgroundBox).attrs({
  backgroundColor: 'lightBrown',
})`
  border-bottom: 1px solid ${({ theme }) => theme.color.brown};
  border-left: 1px solid ${({ theme }) => theme.color.brown};
  border-right: 1px solid ${({ theme }) => theme.color.brown};
  text-align: center;
  display: flex;
  flex: 1;

  :first-child {
    border-left-width: 2px;
  }
  :last-child {
    border-right-width: 2px;
  }
`;


const PartlyActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ' active' : '')
})

const ActiveLink = ({ className, children, to, ...other }) => {
  return (
    <Text 
      as={Link} 
      to={to} 
      activeClassName={to === '/' ? className + " active" : className}
      getProps={to === '/' ? undefined : PartlyActive(className)}
      className={className}
      {...other} 
    >
      {children}
    </Text>
  )
}

const NavbarLink = styled(ActiveLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5em 1em;
  font-family: ${({ theme }) => theme.font.main};
  transition: 0.3s ease-in-out all;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.color.brown};
    color: ${({ theme }) => theme.color.white};
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
  }

  &.active {
    font-weight: bold;
    background-color: ${({ theme }) => theme.color.brown};
    color: white;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);

    :hover {
      background-color: ${({ theme }) => theme.color.lightBrown};
      color: ${({ theme }) => theme.color.black};
    }
  }
`;

const NavLink = ({ to, children, size, className, ...other }) => (
  <NavbarItem {...other}>
    <NavbarLink size={size} to={to} >
      {children}
    </NavbarLink>
  </NavbarItem>
);

export default NavLink;
