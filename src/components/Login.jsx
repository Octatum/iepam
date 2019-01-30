import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Popup from 'reactjs-popup';
import Text from './Text';
import BackgroundBox from './BackgroundBox';
import Button from './Button';

const BorderBox = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.dark};
`;
const Centered = styled(Text)`
  margin: 1rem 0;
  text-align: center;
`;
const Captcha = styled(Box)``;

const InputComponent = ({ placeholder, ...other }) => (
  <BorderBox justifyContent="flex-start" alignItems="center" p={2} width={1} {...other}>
    <BackgroundBox backgroundColor='darkGray' as={Box} mr="10px" width="40px" css={{ height: "40px" }} />
    <Text color="darkGray" size={2}>{placeholder}</Text>
  </BorderBox>
)

const Registration = ({ triggerElement }) => (
  <Popup trigger={triggerElement} modal>
    {close => (
      <Flex flexDirection="column" alignItems="center" px={4}>
        <Flex alignSelf="flex-end" alignItems="flex-end">
          <a onClick={close}>&times;</a>
        </Flex>
        <Centered as={Text} bold size={2} alignSelf="flex-start" pt={3}>
          Inicia sesion en tu cuenta
        </Centered>
        <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

        <BackgroundBox backgroundColor="black" as={Box} my={2} width={1} css={{ height: "75px" }} />
        <BackgroundBox backgroundColor="black" as={Box} mt={2} width={1} css={{ height: "75px" }} mb={5} />

        <InputComponent my={2} placeholder="Correo Electronico" />
        <InputComponent my={2} placeholder="Contrasena" />

        <BackgroundBox backgroundColor="black" as={Captcha} my={2} width={1} css={{ height: "75px" }} />
        <Box>
          <Centered color='darkGray' size={2.5}>o ¿Has olvidado tu Contrasena?</Centered>
          <Centered color='darkGray' size={0}>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</Centered>
        </Box>

        <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" mt={3} />
        <Flex alignItems='center'>
          <Box mr={4}><Text size={3}>¿No tienes una cuenta?</Text></Box>
          <Button kind="dark" size={2}>Registrate</Button>
        </Flex>
      </Flex>
    )}
  </Popup>
)

export default Registration;