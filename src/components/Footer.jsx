import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { Flex, Box } from '@rebass/grid';
import Button from './Button';
import SuggestionBox from './Popups/SuggestionBox';
import { Link } from 'gatsby';

const FlexLayout = styled(Flex)`
  background: ${({ theme }) => theme.color.footer};
`;

const LightBox = styled(Box)`
  background: ${({ theme }) => theme.color.footer};
`;

const DarkFlex = styled(Flex)`
  background: ${({ theme }) => theme.color.darkGray};
`;

const Footer = () => {
  return (
    <footer>
      <FlexLayout p={4}>
        <Box width={2 / 3}>
          <Flex flexDirection="column" pt={4}>
            <Box width={1} p={3}>
              <Flex alignItems="center" justifyContent="space-around" py={3}>
                <Box>
                  <Text bold align="center">
                    <Link to="/">Inicio</Link>
                  </Text>
                </Box>
                <Box>
                  <Text bold align="center">
                    <Link to="/educacion/">Educación</Link>
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex justifyContent="center" pt={3}>
            <Box width={4 / 6}>
              <Text align="center">
                © Lorem ipsum{' '}
                <Text bold as="span">
                  – America’s Most Trusted Senior Citizen Website
                </Text>{' '}
                | Site Disclaimer | Privacy Policy
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box width={1 / 3}>
          <DarkFlex flexDirection="column" px={5} py={4}>
            <SuggestionBox
              triggerElement={
                <Button kind="dark" size={2} css={{ cursor: 'pointer' }}>
                  Buzón de Sugerencias
                </Button>
              }
            />
            <Box width={1} p={4} />
          </DarkFlex>
        </Box>
      </FlexLayout>
    </footer>
  );
};

export default Footer;
