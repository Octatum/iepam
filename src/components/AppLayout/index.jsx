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
import { myOnAuthStateChanged } from '../../utils/useAuth';

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
  const [loggedIn, setLoggedIn] = useState(false);
  myOnAuthStateChanged(function(user) {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet titleTemplate="%s - IEPAM" />
          <NavbarComp />
          <MobileNavbarComp />
          <Box mx="auto" width={1} css={{ maxWidth: '1400px' }}>
            {children}
          </Box>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
