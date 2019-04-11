import React from 'react';
import { Box } from '@rebass/grid';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';


const ErrorComponent = ({ children }) => (
  <BackgroundBox
    width="100%"
    backgroundColor="errorRed"
    as={Box}
    p={2}
    mb={2}
    css={{ borderRadius: '10px' }}
  >
    <Text color="red">{children}</Text>
  </BackgroundBox>
);

export default ErrorComponent;