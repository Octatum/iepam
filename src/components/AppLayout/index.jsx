import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import theme from '../../utils/themes';
import './index.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Box } from '@rebass/grid';

const AppLayout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet titleTemplate="%s - IEPAM" />
        <Navbar />
        <Box mx="auto" width={[1, 1, 1400]}>
          {children}
        </Box>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
