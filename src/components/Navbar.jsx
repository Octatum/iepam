import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import Text from './Text';
import Button from './Button';

const GridLayout = styled(Layout)`
  display: grid;
  grid-template-rows: 1fr 1fr 1.5fr;
  grid-template-columns: 1fr 3fr 1.5fr;
  grid-template-areas:
    '. . address'
    'logo links login'
    '. . block';
  height: 15rem;  
`;

const AddressArea = styled('div')`
  grid-area: address;
  text-align: right;
`;

const LogoArea = styled('div')`
  grid-area: logo;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

const LinksArea = styled('div')`
  grid-area: links;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const ButtonArea = styled('div')`
  grid-area: login;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding-left: 10%;

  > * {
    flex: 1;
  }

  > * {
    margin-left: 0.25rem;
  }
`;

const BlockArea = styled('div')`
  grid-area: block;
  display: flex;
  margin-top: ${({theme}) => theme.rhythmSizing(3)}rem;

  > * {
    background-color: ${({theme}) => theme.color.darkGray};
    flex: 1;
  }

  > :last-child {
    flex: 6;
    margin-left: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <nav>
      <GridLayout paddingVertical={2} paddingHorizontal={4}>
        <AddressArea>
          <Text bold>
            (210) 647-420 5305
          </Text>
          <Text>Bandera Rd, San Antonio, TX 78238, USA</Text>
        </AddressArea>
        <LogoArea />
        <LinksArea>
          <Text href="#" as="a" bold>Link 1</Text>
          <Text href="#" as="a" bold>Link 2</Text>
          <Text href="#" as="a" bold>Link 3</Text>
          <Text href="#" as="a" bold>Link 4</Text>
        </LinksArea>
        <ButtonArea>
          <Button kind="dark">Registrarse</Button>
          <Button>Entrar</Button>
        </ButtonArea>
        <BlockArea>
          <div />
          <div />
        </BlockArea>
      </GridLayout>
    </nav>
  );
};

export default Navbar;
