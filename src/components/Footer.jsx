import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import Text from './Text';

const GridLayout = styled(Layout)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'links block'
    'copyright block';
  height: 20rem;
  grid-gap: 2rem;
  background-color: ${({theme}) => theme.color.footer};
`;

const LinksArea = styled('div')`
  grid-area: links;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

const CopyrightArea = styled(Text)`
  padding: 0 20%;
  grid-area: copyright;
  margin: 0;
`;

const BlockArea = styled(Layout)`
  grid-area: block;
  background-color: ${({theme}) => theme.color.darkGray};

  > * {
    height: 50%;
    width: 100%;
    background-color: ${({theme}) => theme.color.footer};

  }
`;

const Footer = () => {
  return (
    <footer>
      <GridLayout padding={4}>
        <LinksArea>
          <Text as="a" href="#">Texto 1</Text>
          <Text as="a" href="#">Texto 2</Text>
          <Text as="a" href="#">Texto 3</Text>
          <Text as="a" href="#">Texto 4</Text>
        </LinksArea>
        <CopyrightArea align="center">
          © Lorem ipsum –  <Text as="span" bold>America’s Most Trusted Senior Citizen Website</Text> | Site Disclaimer | Privacy Policy
        </CopyrightArea>
        <BlockArea paddingHorizontal={4} paddingVertical={2}>
          <div />
        </BlockArea>
      </GridLayout>
    </footer>
  )
};

export default Footer;
