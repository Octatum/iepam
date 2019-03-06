import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Registration from './Registration';
import Login from './Login';
import RestablecerPass from './RestablecerPass';
import SuggestionBox from './SuggestionBox';
import { device } from './../../utils/device';

const AllHeight = styled.div`
  .popup-content {
    max-height: 90vh;
    overflow: auto;
    max-width: 1000px;

    width: calc(100% - 3rem) !important;

    ${device.tablet} {
      width: 80% !important;
    }
    ${device.laptop} {
      width: 1200px !important;
      max-height: 95vh;
    }
  }
`;

const PopupElement = ({ triggerElement, current, handleLogin }) => {
  const [currentActive, setActive] = useState(current);

  return (
    <AllHeight>
      <Popup trigger={triggerElement} modal onClose={() => setActive(current)}>
        {close => {
          if (currentActive === 'register') {
            return (
              <Registration
                close={close}
                setActive={setActive}
              />
            );
          } else if (currentActive === 'login') {
            return (
              <Login
                close={close}
                setActive={setActive}
              />
            );
          } else if (currentActive === 'restorePass') {
            return (
              <RestablecerPass
                close={close}
                setActive={setActive}
              />
            );
          } else if (currentActive == 'suggestion') {
            return <SuggestionBox close={close} />;
          }
        }}
      </Popup>
    </AllHeight>
  );
};

export const PopupContainer = ({ children, ...props }) => (
  <AllHeight {...props}>{children}</AllHeight>
);

export default PopupElement;
