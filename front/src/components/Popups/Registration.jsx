import React, { useContext, useState } from 'react';
import { Box, Flex } from '@rebass/grid';
import { Formik } from 'formik';
import { createHash } from 'crypto';
import moment from "moment";

import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { RegistrationValidation as validation } from '../../utils/validation';
import InputComponent, {
  CheckboxComponent,
  SelectionComponent,
  Bordered,
  JustInput,
} from './InputComponent';
import UserContext from '../UserContext';

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
  ...others
}) => {
  moment.locale('es')
  console.log(moment.locales())
  const [isError, setError] = useState(null);
  const [userData, setUserData] = useContext(UserContext);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        captcha: false,
        termsConditions: false,
        genero: '',
        nacimiento: { dia: '', mes: '', ano: '' },
      }}
      validationSchema={validation}
      onSubmit={async (values, { setSubmitting }) => {
        const hash = createHash('md5');
        
        const { email, password, name, genero, nacimiento } = values;
        const body = JSON.stringify({
          username: hash.update(name + email).digest('hex'),
          email: email,
          password: password
        });
        setSubmitting(true);
        const response = await fetch('http://localhost:1337/auth/local/register', {
          method: 'POST',
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body
        });

        
      

        const jsonBody = await response.json();

        if(jsonBody.error) {
          if (jsonBody.statusCode === 400) {
            setError(jsonBody.message);
          }
        }
        else {
          //formato de db mongo
          // moment(`${nacimiento.ano}-${nacimiento.mes}-${nacimiento.dia}`, 'YYYY MMMM DD', 'es').format();
          // upload name, genero, nacimiento  || userData
          const userData = JSON.stringify({
            'nombre completo': name,
            genero,
            'fecha de nacimiento': moment(`${nacimiento.ano}-${nacimiento.mes}-${nacimiento.dia}`, 'YYYY MMMM DD', 'es').format(),
            user: jsonBody.user.id
          });

          const creaDatos = await fetch('http://localhost:1337/userdata', {
            method: "POST",
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${jsonBody.jwt}`
            },
            body: userData
          });

          console.log(creaDatos);

          setUserData(jsonBody);
        }
        setSubmitting(false);

        console.log(jsonBody);
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
              handleChange={(event) => {
                setError(null);
                handleChange(event);
              }}
            />
            {errors.email && touched.email && (
              <ErrorComponent>{errors.email}</ErrorComponent>
            )}
            {isError && <ErrorComponent>Este correo ya está en uso</ErrorComponent>}
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
              disabled={isSubmitting}
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
      )}
    </Formik>
  );
}

export default Registration;
