import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { LogingValidation as validation } from '../../utils/validation';
import InputComponent from './InputComponent';
import UserContext from '../UserContext';

const Centered = styled(Text)`
  margin: 1rem 0;
  text-align: center;
`;

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
  isSubmitting,
  ...others
}) => {
  const [isError, setError] = useState(false);
  const [userData, setUserData] = useContext(UserContext);

  return (
    <Formik
      initialValues={{ email: '', password: '', captcha: false }}
      validationSchema={validation}
      onSubmit={async (values, { setSubmitting }) => {
        const { email, password } = values;
        const body = JSON.stringify({
          identifier: email,
          password: password
        });
        setSubmitting(true);
        const response = await fetch('http://localhost:1337/auth/local/', {
          method: 'POST',
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body
        })

        const jsonBody = await response.json();

        if(jsonBody.error) {
          if (jsonBody.statusCode === 400) {
            setError(true);
          }
        }
        else {
          setUserData(jsonBody);
        }
        setSubmitting(false);
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
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
                Inicia sesión en tu cuenta
              </Centered>
              <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

              <InputComponent
                my={2}
                placeholder="Correo Electrónico"
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

              {isError && <ErrorComponent>Contraseña o correo incorrecto</ErrorComponent>}

              <Button
                kind="dark"
                type="submit"
                disabled={isSubmitting}
                size={1}
                style={{ cursor: 'pointer' }}
              >
                Submit
              </Button>

              <Box
                width={1}
                as={BackgroundBox}
                backgroundColor="dark"
                pt="3px"
                mt={3}
              />
              <Box>
                <Centered
                  color="darkGray"
                  bold
                  size={0}
                  onClick={() => setActive('restorePass')}
                  style={{ cursor: 'pointer' }}
                >
                  ¿Has olvidado tu Contraseña?
                </Centered>
                <Centered color="darkGray" size={0}>
                  Al registrarte, aceptas nuestras{' '}
                  <Link to="/educacion" style={{ textDecoration: 'underline' }}>
                    Condiciones de uso
                  </Link>{' '}
                  y{' '}
                  <Link to="/educacion" style={{ textDecoration: 'underline' }}>
                    Política de privacidad.
                  </Link>
                </Centered>
              </Box>

              <Box>
                <Text size={0}>¿No tienes una cuenta?</Text>
              </Box>
              <Button
                kind="light"
                size={0}
                onClick={() => setActive('register')}
                css={{ cursor: 'pointer', borderTop: 'none' }}
              >
                Regístrate
              </Button>
            </Flex>
          </Flex>
        )}
    </Formik >

  );
}

export default Login;