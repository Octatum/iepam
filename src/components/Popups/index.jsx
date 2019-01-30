import React, { useState } from 'react';
import Popup from 'reactjs-popup'
import styled from 'styled-components';
import Registration from './Registration';
import Login from './Login';

const AllHeight = styled.div`
  .popup-content {
    max-height: 90vh;
    overflow: auto;
  }
`;

const PopupElement = ({ triggerElement, current }) => {
  const [currentActive, setActive] = useState(current);

  return (
    <AllHeight>
      <Popup trigger={triggerElement} modal>
        {close => (
          currentActive === 'register' ? 
            <Registration close={close} setActive={setActive} /> 
            : 
            <Login close={close} setActive={setActive} />
        )}
      </Popup>
    </AllHeight>
  )
}

export default PopupElement;