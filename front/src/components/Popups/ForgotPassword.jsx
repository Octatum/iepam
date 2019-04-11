import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { RestorePassValidation as validation } from '../../utils/validation';
import InputComponent, { Bordered } from './InputComponent';
import UserContext from '../UserContext';
import ErrorComponent from './ErrorComponent';

const Centered = styled(Text)`
  margin: 1rem 0;
  text-align: center;
`;

const ForgotPassword = ({
  close,
  setActive,
  ...others
}) => {
  const [userData, setUserData] = useContext(UserContext);

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validation}
      onSubmit={async (values, { setSubmitting }) => {
        /* 
        setSubmitting(true);
        const { email } = values;
        const body = JSON.stringify({
          email,
          url: 'http:/localhost:1337/user/profile/reset-password'
        });
        setSubmitting(true);
        const response = await fetch('http://localhost:1337/auth/forgot-password', {
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
            console.log(jsonBody.error)
          }
        }
        else {
          // success
        } 
        setSubmitting(false);
        */
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
            name="ForgotPassword"
            onSubmit={handleSubmit}
            {...others}
          >
            <CloseButton alignSelf="flex-end" closeFunction={close} />

            <Flex flexDirection="column" alignItems="center" mx={[4]}>
              <Centered as={Text} bold size={2} alignSelf="flex-start" pt={3}>
                Contraseña olvidada
              </Centered>
              <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />
              
              <Box my={3} alignSelf='flex-start'>
                <Text size={1}>
                  Al ingresar su correo electrónico le llegará un correo con un vínculo donde podrá
                  reestablecer su contraseña.
                </Text>
              </Box>

              <Bordered my={2} width={1}>
                <InputComponent                  
                  placeholder="Correo Electrónico"
                  name="email"
                  type="email"
                />
              </Bordered>
              {errors.email && touched.email && (
                <ErrorComponent>{errors.email}</ErrorComponent>
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

              <Box
                width={1}
                as={BackgroundBox}
                backgroundColor="dark"
                pt="3px"
                mt={3}
              />

            </Flex>
          </Flex>
        )}
    </Formik >

  );
}

export default ForgotPassword;