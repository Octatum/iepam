import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import theme from '../../utils/themes';
import './index.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import MobileNavbar from '../NavbarMovil';
import { Box } from '@rebass/grid';
import UserContext from '../UserContext';
import { device } from '../../utils/device';
import { auth } from 'firebase';

const MobileNavbarComp = styled(MobileNavbar)`
  ${device.tablet} {
    display: none;
  }
`;
const NavbarComp = styled(Navbar)`
  display: none;
  ${device.tablet} {
    display: flex;
  }
`;

const AppLayout = ({ children }) => {
  const [userData, setUserData] = useState(null);

  if (auth) {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });
  }
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet titleTemplate="%s - IEPAM" />
          <NavbarComp maxWidth="1400px" />
          <MobileNavbarComp />
          <Box mx="auto" width={1} css={{ maxWidth: '1400px' }}>
            {children}
          </Box>
          <Footer maxWidth="1400px" />
        </React.Fragment>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
