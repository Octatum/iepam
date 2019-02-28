import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { withFormik } from 'formik';
import { RegistrationValidation as validation } from '../../utils/validation';
import InputComponent from './InputComponent';
import { encode } from '../../utils/formEncode';
import { auth } from 'firebase';

const Justified = styled(Text)`
  text-align: justify;
  text-align-last: left;
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

const Registration = ({
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
    name="registerForm"
    onSubmit={handleSubmit}
    {...others}
  >
    <CloseButton alignSelf="flex-end" closeFunction={close} />

    <Flex flexDirection="column" alignItems="center" mx={[4]}>
      <Box as={Text} bold size={3} alignSelf="flex-start" pt={3}>
        Lorem ipsum dolor sit amet.
      </Box>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      <InputComponent
        my={2}
        name="name"
        type="text"
        placeholder="Nombre de Usuario"
        value={values.name}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.name && touched.name && (
        <ErrorComponent>{errors.name}</ErrorComponent>
      )}
      <InputComponent
        my={2}
        name="email"
        type="email"
        placeholder="Correo Electronico"
        value={values.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.email && touched.email && (
        <ErrorComponent>{errors.email}</ErrorComponent>
      )}
      <InputComponent
        my={2}
        name="password"
        type="password"
        placeholder="Contrasena"
        value={values.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.password && touched.password && (
        <ErrorComponent>{errors.password}</ErrorComponent>
      )}

      <Flex flexDirection="column" mt={[2, 5]}>
        <Flex>
          <BackgroundBox
            backgroundColor="darkGray"
            as={Box}
            width="30px"
            css={{ height: '30px' }}
            mr={3}
          />
          <Box width="calc(100% - 30px - 16px)">
            <Justified size={1}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              cumque voluptatibus eligendi totam explicabo dolore ipsam dolorem,
              eveniet illum quod nobis laboriosam tenetur facilis commodi.
            </Justified>
          </Box>
        </Flex>
        <Box width={['100%', 'calc(100% - 60px - 32px)']} alignSelf="center">
          <Captcha
            width={1}
            css={{ height: '100px' }}
            as={BackgroundBox}
            backgroundColor="black"
            my={4}
          />
          <Box as={Text} size={1} css={{ textAlign: 'center' }} mx={2}>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </Box>
        </Box>
      </Flex>
      <Box
        width={1}
        as={BackgroundBox}
        backgroundColor="dark"
        pt="3px"
        mt={3}
      />
      <Flex alignItems="center">
        <Box mr={4}>
          <Text size={2}>¿Ya tienes una cuenta?</Text>
        </Box>
        <Button
          kind="dark"
          size={2}
          onClick={() => setActive('login')}
          css={{ cursor: 'pointer', borderTop: 'none' }}
        >
          Iniciar Sesion
        </Button>
      </Flex>
    </Flex>
    <button type="submit">submit</button>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    name: '',
    captcha: false,
  }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting, props }) => {
    const { email, password } = values;
    auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      setSubmitting(false)
      alert(error)
    })
    .then(() => {
        alert("submission received");
        setSubmitting(false);
      })
    /* fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'registerForm',
      }),
    })
      .then(() => {
        alert('Your message was sent!');
        setSubmitting(false);
        // navigate('/');
        const { handleLogin } = props;
        handleLogin(true);
      })
      .catch(() => {
        setSubmitting(false);
        return error => alert(error);
      }); */
  },
  displayName: 'registerForm',
})(Registration);
