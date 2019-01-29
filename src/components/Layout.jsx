import React from 'react';
import styled, { withTheme } from 'styled-components';

const Layout = props => {
  const { theme, padding, paddingVertical, paddingHorizontal, as } = props;
  const rhythm = theme.rhythmSizing;

  const Component = styled(as)`
    padding: ${rhythm(paddingVertical || padding)}rem
      ${rhythm(paddingHorizontal || padding)}rem;
    box-sizing: border-box;
  `;

  return <Component {...props} />;
};

Layout.defaultProps = {
  as: 'div',
  padding: 0,
};

export default withTheme(Layout);