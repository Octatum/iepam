import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';

const ShadowCard = styled(Flex)`
  box-shadow: 0 5px 10px 2px ${({ theme }) => theme.color.opaqueBlack};
`;

const ProfileCard = ({ title, children }) => (
  <ShadowCard flexDirection="column" pb={4} px={4} pt={3} mb={3}>
    <Text size={3} bold>{title}</Text>
    <BackgroundBox backgroundColor="superLightGray" css={{border:'1px solid rgba()'}} px={4} py={2} mt={3}>
      <Text size={2}>
        {children}
      </Text>
    </BackgroundBox>
  </ShadowCard>
)

export default ProfileCard;