import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { withFormik } from 'formik';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import validation from '../../utils/validation';

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

const InputComponent = ({
  placeholder,
  type = 'text',
  name = '',
  value,
  handleChange,
  handleBlur,
  ...other
}) => (
  <BorderBox
    justifyContent="flex-start"
    alignItems="center"
    p={2}
    width={1}
    {...other}
  >
    <BackgroundBox
      backgroundColor="darkGray"
      as={Box}
      mr="10px"
      width="40px"
      css={{ height: '40px' }}
    />
    <Text
      color="darkGray"
      size={0}
      as={Input}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  </BorderBox>
);

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

const Login = ({
  close,
  setActive,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  ...others
}) => (
  <Flex
    flexDirection="column"
    mb={4}
    as="form"
    name="LoginForm"
    onSubmit={handleSubmit}
    {...others}
  >
    <CloseButton alignSelf="flex-end" closeFunction={close} />

    <Flex flexDirection="column" alignItems="center" mx={[4]}>
      <Centered as={Text} bold size={1} alignSelf="flex-start" pt={3}>
        Inicia sesion en tu cuenta
      </Centered>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      {/* login with google and others */}
      <BackgroundBox
        backgroundColor="black"
        as={Box}
        my={2}
        width={1}
        css={{ height: '75px' }}
      />
      <BackgroundBox
        backgroundColor="black"
        as={Box}
        mt={2}
        width={1}
        css={{ height: '75px' }}
        mb={5}
      />

      <InputComponent
        my={2}
        placeholder="Correo Electronico"
        name="email"
        type="email"
        value={values.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.email && touched.email && (
        <ErrorComponent>{errors.email}</ErrorComponent>
      )}

      <InputComponent
        my={2}
        placeholder="Contraseña"
        name="password"
        type="password"
        value={values.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.password && touched.password && (
        <ErrorComponent>{errors.password}</ErrorComponent>
      )}

      {/* captcha */}
      <BackgroundBox
        backgroundColor="black"
        as={Captcha}
        my={2}
        width={1}
        css={{ height: '75px' }}
      />
      <Box>
        <Centered color="darkGray" size={1}>
          o ¿Has olvidado tu Contrasena?
        </Centered>
        <Centered color="darkGray" size={0}>
          Al registrarte, aceptas nuestras Condiciones de uso y Política de
          privacidad.
        </Centered>
      </Box>

      <Box
        width={1}
        as={BackgroundBox}
        backgroundColor="dark"
        pt="3px"
        mt={3}
      />
      <Flex alignItems="center">
        <Box mr={4}>
          <Text size={1}>¿No tienes una cuenta?</Text>
        </Box>
        <Button
          kind="dark"
          size={0}
          onClick={() => setActive('register')}
          css={{ cursor: 'pointer', borderTop: 'none' }}
        >
          Registrate
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', captcha: false }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
  },
  displayName: 'LoginForm',
})(Login);
