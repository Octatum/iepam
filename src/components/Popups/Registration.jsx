import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';

const BorderBox = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.dark};
`;
const Justified = styled(Text)`
  text-align: justify;
  text-align-last: left;
`;
const Captcha = styled(Box)``;
const Input = styled.input`
  border: none;
  width: 100%;
`;

const InputComponent = ({ placeholder, type = 'text', name = '', ...other }) => (
  <BorderBox justifyContent="flex-start" alignItems="center" p={2} width={1} {...other}>
    {/* <BackgroundBox backgroundColor='darkGray' as={Box} mr="10px" width="40px" css={{ height: "40px" }} /> */}
    <Text color="darkGray" size={1} as={Input} placeholder={placeholder} type={type} name={name} />
  </BorderBox>
)

const Registration = ({ close, setActive, ...other }) => (
  <Flex flexDirection="column" mb={4} {...other}>
    <CloseButton alignSelf="flex-end" closeFunction={close} />

    <Flex flexDirection="column" alignItems="center" mx={[4]}>
      <Box as={Text} bold size={1} alignSelf="flex-start" pt={3}>
        Lorem ipsum dolor sit amet.
      </Box>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      <InputComponent my={2} name="name" type="text" placeholder="Nombre de Usuario" />
      <InputComponent my={2} name="email" type="email" placeholder="Correo Electronico" />
      <InputComponent my={2} name="password" type="password" placeholder="Contrasena" />

      <Flex flexDirection="column" mt={[2, 5]}>
        <Flex>
          <BackgroundBox backgroundColor="darkGray" as={Box} width="30px" css={{ height: "30px" }} mr={3} />
          <Box width="calc(100% - 30px - 16px)">
            <Justified size={0}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cumque voluptatibus eligendi totam explicabo dolore ipsam dolorem, eveniet illum quod nobis laboriosam tenetur facilis commodi.
            </Justified>
          </Box>
        </Flex>
        <Box width={["100%","calc(100% - 60px - 32px)"]} alignSelf="center">
          <Captcha width={1} css={{ height: '100px' }} as={BackgroundBox} backgroundColor="black" my={4} />
          <Box as={Text} css={{ textAlign: 'center' }} mx={2} >Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</Box>
        </Box>
      </Flex>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" mt={3} />
      <Flex alignItems='center'>
        <Box mr={4}><Text size={1}>¿Ya tienes una cuenta?</Text></Box>
        <Button kind="dark" size={1} onClick={() => setActive('login')} css={{ cursor: 'pointer', borderTop: 'none' }}>Iniciar Sesion</Button>
      </Flex>
    </Flex>
  </Flex>

)

export default Registration;