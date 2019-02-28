import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { withFormik, Formik } from 'formik';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { LogingValidation as validation } from '../../utils/validation';
import InputComponent from './InputComponent';
import { encode } from '../../utils/formEncode';
import { Link, navigate } from 'gatsby';
import { auth } from 'firebase';

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
      <Centered as={Text} bold size={3} alignSelf="flex-start" pt={3}>
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
        <Centered color="darkGray" size={2} onClick={() => setActive('restorePass')} style={{cursor:'pointer'}}>
          ¿Has olvidado tu Contrasena?
        </Centered>
        <Centered color="darkGray" size={1}>
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
          <Text size={2}>¿No tienes una cuenta?</Text>
        </Box>
        <Button
          kind="dark"
          size={2}
          onClick={() => setActive('register')}
          css={{ cursor: 'pointer', borderTop: 'none' }}
        >
          Registrate
        </Button>
      </Flex>
      <button type="submit">submit</button>
    </Flex>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', captcha: false }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting, props }) => {
    const { email, password } = values;
    auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      setSubmitting(false)
      alert(error)
    })
      .then(() => {
        alert("submission received");
        setSubmitting("false");
      })
    /* console.log(JSON.stringify(values, null, 2));
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'loginForm',
      }),
    })
      .then(() => {
        alert('Your message was sent!');
        setSubmitting(false);
        // navigate('/');
        const { handleLogin } = props;
        
      })
      .catch(() => {
        setSubmitting(false);
        return error => alert(error);
      }); */
  },
  displayName: 'LoginForm',
})(Login);
