import React from 'react';
import { Box, Flex } from '@rebass/grid';
import { Formik } from 'formik';
import { navigate } from '@reach/router';
import InputComponent, { Bordered } from '../../components/Popups/InputComponent';
import Text from '../../components/Text';
import BackgroundBox from '../../components/BackgroundBox';
import ErrorComponent from '../../components/Popups/ErrorComponent';
import Button from '../../components/Button';
import { ResetPassValidation as validation } from '../../utils/validation';

const ResetPass = ({ code, ...others }) => {

  return (
    <Formik
      initialValues={{ password: '', passwordConfirmation: '' }}
      validationSchema={validation}
      onSubmit={async (values, { setSubmitting }) => {
        const { passwordConfirmation, password } = values;
        const body = JSON.stringify({
          code,
          password,
          passwordConfirmation
        });
        setSubmitting(true);
        const response = await fetch('http://localhost:1337/auth/reset-password', {
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
          if (jsonBody.statusCode !== 200) {
            //error interno
          }
        }
        else {
          setSubmitting(false);
          navigate('/')
        }
        setSubmitting(false);
      }}
    >
      {({
        touched,
        errors,
        handleSubmit,
        isSubmitting
      }) => (
          <Flex
            flexDirection="column"
            mb={4}
            as="form"
            name="RestprePassword"
            onSubmit={handleSubmit}
            {...others}
          >
            
            <Flex flexDirection="column" alignItems="center" mx={[4]}>
              <Text>Restaura tu Contraseña</Text>
              <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />
              
              <Bordered my={2} width={1}>
                <InputComponent                  
                  placeholder="Contraseña"
                  name="password"
                  type="password"
                />
              </Bordered>
              {errors.password && touched.password && (
                <ErrorComponent>{errors.password}</ErrorComponent>
              )}

              <Bordered my={2} width={1}>
                <InputComponent
                  placeholder="Confirme su contraseña"
                  name="passwordConfirmation"
                  type="password"
                />
              </Bordered>
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <ErrorComponent>{errors.passwordConfirmation}</ErrorComponent>
              )}

              <Button
                kind="dark"
                type="submit"
                disabled={isSubmitting}
                size={1}
                style={{ cursor: 'pointer' }}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        )}
    </Formik >
  )
}

export default ResetPass;