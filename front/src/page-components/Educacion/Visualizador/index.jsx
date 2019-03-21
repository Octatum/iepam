import React, { useState } from 'react';
import { Box, Flex } from '@rebass/grid';
import styled from 'styled-components';
import BackgroundBox from '../../../components/BackgroundBox';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const PlayArrow = styled(Box)`
  width: 0px;

  border-top: solid 30px transparent;
  border-bottom: solid 30px transparent;
  border-left: solid 50px white;

  margin: auto;
`;

const Visualizador = ({ courseName }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box>
      <BackgroundBox
        backgroundColor="darkestGray"
        css={{ height: '80vh' }}
        as={Flex}
      >
        <PlayArrow />
      </BackgroundBox>

      <Box my={4} w={1 / 3}>
        <Text bold size={2} align="center">
          Master en PHP, SQL, POO, MVC, Laravel, Symfony 4, Wordpress
        </Text>
      </Box>

      <Box>
        <Flex flex="1 0 auto">
          <Button
            kind={selectedTab === 0 ? 'dark' : 'light'}
            css={{ cursor: 'pointer' }}
            onClick={() => setSelectedTab(0)}
          >
            Temas
          </Button>
          <Button
            kind={selectedTab === 1 ? 'dark' : 'light'}
            css={{ cursor: 'pointer' }}
            onClick={() => setSelectedTab(1)}
          >
            Mas
          </Button>
          <Box width={1} />
          <BackgroundBox
            as={Flex}
            backgroundColor="black"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            css={{ borderRadius: '50%', height: '30px' }}
            width="30px"
          >
            <BackgroundBox
              backgroundColor="white"
              width="3px"
              css={{ height: '5px' }}
            />
            <BackgroundBox
              width={0}
              css={{
                borderLeft: 'solid 7px transparent',
                borderRight: 'solid 7px transparent',
                borderTop: 'solid 10px white',
              }}
            />
          </BackgroundBox>
        </Flex>
      </Box>
      <BackgroundBox backgroundColor="darkestGray" width={1} py="1px" mb={3} />
    </Box>
  );
};

export default Visualizador;
