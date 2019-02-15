import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Registration from './Registration';
import Login from './Login';
import { device } from './../../utils/device';

const AllHeight = styled.div`
  .popup-content {
    max-height: 80vh;
    overflow: auto;

    width: calc(100% - 3rem) !important;

    ${device.tablet} {
      width: 80% !important;
    }
    ${device.laptop} {
      width: 1200px !important;
      max-height: 90vh;
    }
  }
`;

const PopupElement = ({ triggerElement, current, handleLogin }) => {
  const [currentActive, setActive] = useState(current);

  return (
    <AllHeight>
      <Popup trigger={triggerElement} modal lockScroll={true}>
        {close =>
          currentActive === 'register' ? (
            <Registration
              close={close}
              setActive={setActive}
              handleLogin={handleLogin}
            />
          ) : (
            <Login
              close={close}
              setActive={setActive}
              handleLogin={handleLogin}
            />
          )
        }
      </Popup>
    </AllHeight>
  );
};

export const PopupContainer = ({ children, ...props }) => (
  <AllHeight {...props}>{children}</AllHeight>
);

export default PopupElement;
