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
const Centered = styled(Text)`
  margin: 1rem 0;
  text-align: center;
`;
const Captcha = styled(Box)``;
const Input = styled.input`
  border: none;
  width: 100%;
`;

const InputComponent = ({ placeholder, type = 'text', name = '', ...other }) => (
  <BorderBox justifyContent="flex-start" alignItems="center" p={2} width={1} {...other}>
    <BackgroundBox backgroundColor='darkGray' as={Box} mr="10px" width="40px" css={{ height: "40px" }} />
    <Text color="darkGray" size={2} as={Input} placeholder={placeholder} type={type} name={name} />
  </BorderBox>
)

const Registration = ({ close, setActive }) => (
  <Flex flexDirection="column" mb={4}>
    <CloseButton alignSelf="flex-end" closeFunction={close} />

    <Flex flexDirection="column" alignItems="center" mx={[4]}>
      <Centered as={Text} bold size={2} alignSelf="flex-start" pt={3}>
        Inicia sesion en tu cuenta
          </Centered>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      {/* login with google and others */}
      <BackgroundBox backgroundColor="black" as={Box} my={2} width={1} css={{ height: "75px" }} />
      <BackgroundBox backgroundColor="black" as={Box} mt={2} width={1} css={{ height: "75px" }} mb={5} />

      <InputComponent my={2} placeholder="Correo Electronico" name="email" type="email" />
      <InputComponent my={2} placeholder="Contrasena" name="password" type="password" />

      {/* captcha */}
      <BackgroundBox backgroundColor="black" as={Captcha} my={2} width={1} css={{ height: "75px" }} />
      <Box>
        <Centered color='darkGray' size={2.5}>o ¿Has olvidado tu Contrasena?</Centered>
        <Centered color='darkGray' size={0}>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</Centered>
      </Box>

      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" mt={3} />
      <Flex alignItems='center'>
        <Box mr={4}><Text size={3}>¿No tienes una cuenta?</Text></Box>
        <Button kind="dark" size={2} onClick={() => setActive('register')}>Registrate</Button>
      </Flex>
    </Flex>
  </Flex>


)

export default Registration;