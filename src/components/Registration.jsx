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
const Justified = styled(Text)`
  text-align: justify;
  text-align-last: left;
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
        <Box as={Text} bold size={2} alignSelf="flex-start" pt={3}>
          Lorem ipsum dolor sit amet.
        </Box>
        <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />
        <InputComponent my={2} placeholder="Contrasena" />
        <InputComponent my={2} placeholder="Correo Electronico" />
        <InputComponent my={2} placeholder="Contrasena" />
        
        <Flex mt={5}>
          <BackgroundBox backgroundColor="darkGray" as={Box} width="30px" css={{ height: "30px" }} mr={3} />
          <Flex flexDirection="column" width="calc(100% - 30px - 3rem)">
            <Justified size={1.5}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cumque voluptatibus eligendi totam explicabo dolore ipsam dolorem, eveniet illum quod nobis laboriosam tenetur facilis commodi.
            </Justified>
            <Captcha width={1} css={{ height: '100px' }} as={BackgroundBox} backgroundColor="black" my={4} />
            <Box as={Text} css={{ textAlign: 'center' }} mx={2} >Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</Box>
          </Flex>
        </Flex>
        <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" mt={3} />
        <Flex alignItems='center'>
          <Box mr={4}><Text size={3}>¿Ya tienes una cuenta?</Text></Box>
          <Button kind="dark" size={2}>Iniciar Sesion</Button>
        </Flex>
      </Flex>
    )}
  </Popup>
)

export default Registration;