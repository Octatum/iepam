import React from 'react';

import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { withFormik } from 'formik';
import { RegistrationValidation as validation } from '../../utils/validation';
import InputComponent, {
  CheckboxComponent,
  SelectionComponent,
  Bordered,
  JustInput,
} from './InputComponent';
import { auth } from 'firebase';
/* import { myCreateUserWithEmailAndPassword } from '../../utils/useAuth'; */

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
      <Box as={Text} bold size={2} alignSelf="center" pt={3}>
        Regístrese aquí
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
        placeholder="Correo Electrónico"
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

      <Bordered width={1} my={2}>
        <SelectionComponent
          options={['---', 'hombre', 'mujer', 'otro']}
          name="genero"
          title="Género"
          value={values.genero}
          handleBlur={handleBlur}
          handleChange={handleChange}
          width={1}
        />
      </Bordered>
      {errors.genero && touched.genero && (
        <ErrorComponent>{errors.genero}</ErrorComponent>
      )}

      <Bordered width={1} my={2} flexDirection={['column', 'row']}>
        <Box width={[1, 1 / 3]} as={Text} alignSelf="flex-start" size={1}>
          Fecha de Nacimiento
        </Box>
        <Flex width={[1, 2 / 3]}>
          <SelectionComponent
            options={['Día', ...Array.from(new Array(31), (x, i) => i + 1)]}
            name="nacimiento.dia"
            value={values.nacimiento.dia}
            handleBlur={handleBlur}
            handleChange={handleChange}
            width={[1, 1 / 3]}
          />
          <SelectionComponent
            options={[
              'Mes',
              'Enero',
              'Febrero',
              'Marzo',
              'Abril',
              'Mayo',
              'Junio',
              'Julio',
              'Agosto',
              'Septiembre',
              'Octubre',
              'Noviembre',
              'Diciembre',
            ]}
            name="nacimiento.mes"
            value={values.nacimiento.mes}
            handleBlur={handleBlur}
            handleChange={handleChange}
            width={[1, 1 / 3]}
          />

          <JustInput
            placeholder="Año"
            type="number"
            name="nacimiento.ano"
            value={values.nacimiento.ano}
            handleBlur={handleBlur}
            handleChange={handleChange}
            min={new Date().getFullYear() - 130}
            max={new Date().getFullYear()}
            width={[1, 1 / 3]}
          />
        </Flex>
      </Bordered>
      {errors.nacimiento &&
        errors.nacimiento.dia &&
        touched.nacimiento &&
        touched.nacimiento.dia && (
          <ErrorComponent>{errors.nacimiento.dia}</ErrorComponent>
        )}
      {errors.nacimiento &&
        errors.nacimiento.mes &&
        touched.nacimiento &&
        touched.nacimiento.mes && (
          <ErrorComponent>{errors.nacimiento.mes}</ErrorComponent>
        )}
      {errors.nacimiento &&
        errors.nacimiento.ano &&
        touched.nacimiento &&
        touched.nacimiento.ano && (
          <ErrorComponent>{errors.nacimiento.ano}</ErrorComponent>
        )}
      <Box width={1}>
        <Text color="darkGray" size={0}>
          * todos los campos son obligatorios
        </Text>
      </Box>

      <Flex flexDirection="column" mt={[2, 4]}>
        <CheckboxComponent
          my={2}
          name="termsConditions"
          value={values.termsConditions}
          handleBlur={handleBlur}
          handleChange={handleChange}
          size={0}
        >
          Al registrarte, aceptas nuestras Condiciones de uso y Política de
          privacidad.
        </CheckboxComponent>
      </Flex>

      <Button
        kind="dark"
        size={1}
        type="submit"
        css={{ cursor: 'pointer', borderTop: 'none' }}
      >
        Registrarse
      </Button>

      <Box
        width={1}
        as={BackgroundBox}
        backgroundColor="dark"
        pt="3px"
        mt={3}
      />
      <Box my={2}>
        <Text size={0}>¿Ya tienes una cuenta?</Text>
      </Box>
      <Button
        size={0}
        onClick={() => setActive('login')}
        css={{ cursor: 'pointer', borderTop: 'none' }}
      >
        Inicia Sesión
      </Button>
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
    genero: '',
    nacimiento: { dia: '', mes: '', ano: '' },
  }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    const { email, password, name } = values;
    setSubmitting(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      })
      .then(userCredential => {
        const headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
        const body = JSON.stringify({
          userId: userCredential.user.uid,
          email,
          name,
        });
        fetch(`${process.env.GATSBY_FUNCTIONS_URL}/createUser`, {
          method: 'POST',
          headers,
          body,
        })
          .then(res => console.log('created user', userCredential))
          .catch(error => console.log(error));
      });
  },
  displayName: 'registerForm',
})(Registration);
