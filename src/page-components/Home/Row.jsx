import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import BackgroundBox from '../../components/BackgroundBox';
import Text from '../../components/Text';
import { withButtonStyles } from '../../components/Button';
import { Link } from 'gatsby';
import { device } from '../../utils/device';

const MyLink = withButtonStyles(Link);

const MobileRow = styled(Flex)`
  box-shadow: 0 0 10px 3px ${({ theme }) => theme.color.lightGray};
  ${device.laptop} {
    display: none;
  }
`;

const DesktopRow = styled(Flex)`
  display: none;
  ${device.laptop} {
    display: flex;
  }
`;

const Row = ({ title, children, linkTo }) => (
  <React.Fragment>
    <DesktopRow flexDirection="column" mb={5} mx={0}>
      <Box mb={3}>
        <Text bold size={5}>
          {title}
        </Text>
      </Box>
      <BackgroundBox as={Flex} backgroundColor="darkGray" p={5} alignItems="center" >
        <Box width={7 / 10}>
          {children}
        </Box>
        <Box width={1 / 10} />
        <Box width={2 / 10} alignSelf="flex-end">
          <MyLink to={linkTo} kind="dark" style={{ cursor: 'pointer' }}>
            <Text size={2} bold style={{ color: 'inherit' }}>
              Ver más...
            </Text>
          </MyLink>
        </Box>

      </BackgroundBox>
    </DesktopRow>
    <MobileRow flexDirection="column" mb={5} mx={4}>
      <BackgroundBox width={1} css={{height:'200px'}}/>
      <BackgroundBox as={Flex} flexDirection="column" backgroundColor="darkestGray" p={3}>
        <Box mb={3}>
          <Text size={10} bold color="white">{title}</Text>
        </Box>
        <Text size={3}>{children}</Text>
      </BackgroundBox>
    </MobileRow>
  </React.Fragment>
);

export default Row;