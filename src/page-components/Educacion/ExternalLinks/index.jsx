import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Box } from '@rebass/grid';
import BackgroundBox from '../../../components/BackgroundBox';
import Text from '../../../components/Text';
import Button, { withButtonStyles } from '../../../components/Button';

const MyLink = withButtonStyles('a');

const EnlaceExterno = ({
  bigImage,
  courseLink,
  courseProvider,
  description,
  courses,
  ...other
}) => {
  return (
    <Box {...other}>
      <Flex p={4} flexDirection="column">
        <BackgroundBox width={1} p={3} backgroundColor="darkestGray">
          <Flex>
            <BackgroundBox
              backgroundColor="darkGray"
              image={bigImage}
              css={{ height: '15rem' }}
              width={2 / 5}
              alignSelf="center"
              my={3}
            />
            <Box width={2 / 5} p={3}>
              <Flex flexDirection="column">
                <Box py={3}>
                  <Text color="white" size={3}>
                    {courseProvider}
                  </Text>
                </Box>
                <Box py={3}>
                  <Text align="justify" color="white">
                    {description}
                  </Text>
                </Box>
                <Box py={3}>
                  <Text
                    size={1}
                    color="white"
                    as="a"
                    target="_blank"
                    href={courseLink}
                  >
                    Ir al sitio
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </BackgroundBox>
      </Flex>
      <Flex px={4}>
        <BackgroundBox
          backgroundColor="darkestGray"
          mr={3}
          p={3}
          width={1 / 3}
        />
        <BackgroundBox backgroundColor="darkestGray" width={1 / 18} />
      </Flex>
      <Box px={4} py={5} pb={6}>
        <Box pl={3} pb={3}>
          <Text size={2} bold>
            Cursos Destacados
          </Text>
        </Box>
        {courses.map(data => (
          <Box key={data.nombre} pt={3} my={4}>
            <BackgroundBox backgroundColor="darkGray" p={4} px={3}>
              <Flex alignItems="center" justifyContent="space-between">
                <Box width={2 / 10}>
                  <Text size={1.5} color="white">
                    {data.nombre}
                  </Text>
                </Box>
                <Box width={6 / 10} mx={4}>
                  <Text color="white" size={1}>
                    {data.courseDescription}
                  </Text>
                </Box>
                <Box width={1 / 10}>
                  <MyLink
                    href={data.link}
                    target="_blank"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    size={2}
                    kind="dark"
                  >
                    <Text style={{ color: 'inherit' }}>Ver</Text>
                  </MyLink>
                </Box>
              </Flex>
            </BackgroundBox>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

EnlaceExterno.propTypes = {
  courseLink: PropTypes.string,
  courseProvider: PropTypes.string,
  description: PropTypes.string,
  courses: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    courseDescription: PropTypes.string,
  }),
  bigImage: PropTypes.string,
};

export default EnlaceExterno;
