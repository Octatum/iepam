import React from 'react';
import { withFormik } from 'formik';
import CloseButton from './CloseButton';
import { Flex, Box } from '@rebass/grid';
import { encode } from '../../utils/formEncode';
import { RestorePassValidation as validation } from '../../utils/validation';
import BackgroundBox from '../BackgroundBox';
import Text from '../Text';
import InputComponent from './InputComponent';
import Button from '../Button';

const RestorePassword = ({
  close,
  setActive,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  others,
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
      <Box as={Text} bold size={3} pt={3}>
        Restablecer Contraseña
      </Box>

      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      <Box as={Text} size={2} align="center" width={3 / 4} pt={3}>
        Enter your username or email to reset your password.
        <br />
        You will receive an email with instructions on how to reset your
        password. 
        <br />If you are experiencing problems resetting your password
        contact us or send us an email
      </Box>

      <InputComponent
        handleBlur={handleBlur}
        handleChange={handleChange}
        name="nameOrMail"
        placeholder="Nombre de usuario o correo"
        type="text"
        value={values.nameOrMail}
      />

      <Box my={4} width={1}>
        <Button
          kind="dark"
          type="submit"
          size={2}
          css={{ cursor: 'pointer', width: '100%' }}
        >
          Restablecer Contraseña
        </Button>
      </Box>

      <Flex justifyContent="space-between" width={1}>
        <Button
          onClick={() => setActive('login')}
          size={2}
          css={{ cursor: 'pointer' }}
        >
          Entrar
        </Button>

        <Flex flexDirection="column">
          <Text size={2}>¿No eres miembro?</Text>
          <Text
            bold
            onClick={() => setActive('register')}
            size={2}
            css={{ cursor: 'pointer', alignSelf: 'flex-end' }}
          >
            Regístrate
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({ nameOrMail: '' }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    fetch('/restorePass', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'restorePassword',
      }),
    })
      .then(() => {
        alert('Your message was sent!');
        setSubmitting(false);
        // navigate('/');
      })
      .catch(() => {
        setSubmitting(false);
        return error => alert(error);
      });
  },
  displayName: 'RestorePassword',
})(RestorePassword);
