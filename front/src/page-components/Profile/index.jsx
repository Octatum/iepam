import React, { useEffect, useContext } from 'react';
import { Box, Flex } from '@rebass/grid';
import { Link, navigateTo } from 'gatsby';
import UserContext from '../../components/UserContext';
import BackgroundBox from '../../components/BackgroundBox';
import Text from '../../components/Text';
import ProfileCard from './ProfileCard';
import SavedCourses from './SavedCourses';
import { savedCourses as courses } from './courses';
import { getUserOrRedirect, getUserData } from '../../utils/hooks';

const MyProfile = () => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    getUserOrRedirect(user, () => navigateTo('/'));
  }, [user]);

  useEffect(() => {
    getUserData(user);
  });

  return (
    <Flex flexDirection="column">
      <Flex flexDirection={['column', 'row']} mt={[4]} mx={[4]}>
        <Flex
          flexDirection="column"
          width={[1, 8 / 20]}
          css={{ boxShadow: '0 5px 10px 2px #00000038' }}
        >
          <BackgroundBox
            backgroundColor="darkestGray"
            as={Flex}
            flexDirection="column"
            alignItems="center"
          >
            <Box width={1 / 2} py={4}>
              <BackgroundBox
                backgroundColor="lightGray"
                width={1}
                mx="auto"
                css={{ borderRadius: '50%', height: '200px' }}
                mb={4}
              />
              <Text size={3} align="center" color="white" bold>
                Alejandro Walter Velarde Ruiz
              </Text>
            </Box>
          </BackgroundBox>
          <Flex as={BackgroundBox} flexDirection="column">
            <Box px={2} py={3}>
              <Text size={1} bold as={Link} to="/">
                Mi Perfil
              </Text>
            </Box>
            <Box px={2} py={3}>
              <Text size={1} bold as={Link} to="/">
                Fotografia
              </Text>
            </Box>
            <Box px={2} py={3}>
              <Text size={1} bold as={Link} to="/">
                Cuenta
              </Text>
            </Box>
            <Box px={2} py={3}>
              <Text size={1} bold as={Link} to="/">
                Privacidad
              </Text>
            </Box>
            <Box px={2} py={3}>
              <Text size={1} bold as={Link} to="/">
                Notificaciones
              </Text>
            </Box>
            <Box px={2} py={3}>
              <Text size={1} bold as={Link} to="/">
                Cerrar Cuenta
              </Text>
            </Box>
            {/* Mi perfil
                Fotografia
                Cuenta
                Privacidad
                Notificaciones
                Cerrar Cuenta
            */}
          </Flex>
        </Flex>

        <Box width={1 / 20} />

        <Flex flexDirection="column" width={[1, 11 / 20]} my={[4, 0]}>
          <ProfileCard title="Sobre tí">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            omnis, mollitia laudantium modi porro corporis.
          </ProfileCard>
          <ProfileCard title="Direccion">-</ProfileCard>
          <ProfileCard title="Direccion">-</ProfileCard>
        </Flex>
      </Flex>

      <Box mt={[3, 5]} mb={4} px={[4]}>
        <Text size={3} bold>
          Cursos Guardados
        </Text>
      </Box>
      <Box px={[4]} mb={4}>
        <SavedCourses coursesLinks={courses} />
      </Box>
    </Flex>
  );
};

export default MyProfile;
