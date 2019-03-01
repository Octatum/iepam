import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { withFormik } from 'formik';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { LogingValidation as validation } from '../../utils/validation';
import InputComponent from './InputComponent';
import { Link } from 'gatsby';
import { mySignInWithEmailAndPassword } from '../../utils/useAuth';

const Centered = styled(Text)`
  margin: 1rem 0;
  text-align: center;
`;
const Captcha = styled(Box)``;

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
  handleLogin,
  isSubmitting,
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
      <Centered as={Text} bold size={2} alignSelf="flex-start" pt={3}>
        Inicia sesion en tu cuenta
      </Centered>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      {/* login with google and others */}
      {/* <BackgroundBox
        backgroundColor="black"
        as={Box}
        my={2}
        width={1}
        css={{ height: '50px' }}
      />
      <BackgroundBox
        backgroundColor="black"
        as={Box}
        mt={2}
        width={1}
        css={{ height: '50px' }}
        mb={5}
      /> */}

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
      {/* <BackgroundBox
        backgroundColor="black"
        as={Captcha}
        my={2}
        width={1}
        css={{ height: '75px' }}
      /> */}
      <Box>
        <Centered color="darkGray" size={1.5} onClick={() => setActive('restorePass')} style={{cursor:'pointer'}}>
          ¿Has olvidado tu Contraseña?
        </Centered>
        <Centered color="darkGray" size={0.5}>
          Al registrarte, aceptas nuestras <Link to="/educacion" style={{textDecoration:'underline'}}>Condiciones de uso</Link> y <Link to="/educacion" style={{textDecoration:'underline'}}>Política de
          privacidad.</Link>
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
          <Text size={1.5}>¿No tienes una cuenta?</Text>
        </Box>
        <Button
          kind="dark"
          size={1.5}
          onClick={() => setActive('register')}
          css={{ cursor: 'pointer', borderTop: 'none' }}
        >
          Registrate
        </Button>
      </Flex>
      <button disabled={isSubmitting} type="submit">submit</button>
    </Flex>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', captcha: false }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting, props }) => {
    const { email, password } = values;
    mySignInWithEmailAndPassword(email, password)
    .catch(error => {
      setSubmitting(false);
      alert(error);
    })
    .then(() => {
      alert("submission received");
      setSubmitting(false);
    })
  },
  displayName: 'LoginForm',
})(Login);
