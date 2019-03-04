import React from 'react';

import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { withFormik } from 'formik';
import { RegistrationValidation as validation } from '../../utils/validation';
import InputComponent, { CheckboxComponent } from './InputComponent';
import { myCreateUserWithEmailAndPassword } from '../../utils/useAuth';


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
        placeholder="Contraseña"
        value={values.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.password && touched.password && (
        <ErrorComponent>{errors.password}</ErrorComponent>
      )}

      <Flex flexDirection="column" mt={[2, 5]}>
        <CheckboxComponent 
          my={2}
          name="termsConditions" 
          value={values.termsConditions} 
          handleBlur={handleBlur} 
          handleChange={handleChange} 
          >
          Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.
        </CheckboxComponent>
        {errors.termsConditions && touched.termsConditions && <ErrorComponent>{errors.termsConditions}</ErrorComponent>}
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
      <button type="submit">submit</button>
    </Flex>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    name: '',
    captcha: false,
    termsConditions: false,
  }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    const { email, password, name } = values;
    myCreateUserWithEmailAndPassword({ email, password, name })
      .catch(error => {
        setSubmitting(false);
        alert(error);
      })
  },
  displayName: 'registerForm',
})(Registration);
