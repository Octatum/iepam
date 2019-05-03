import React from 'react';
import { Box, Flex } from '@rebass/grid';
import { Formik } from 'formik';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { SuggestionBoxValidation as validation } from '../../utils/validation';
import InputComponent, { Bordered } from './InputComponent';
import ErrorComponent from './ErrorComponent';

const SuggestionBox = ({
  close,
  ...others
}) => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validation}
      onSubmit={async (values, {setSubmitting}) => {
        console.log(JSON.stringify(values, null, 2));
        /* fetch('/suggestion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'suggestionForm',
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
          }); */
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
        name="Suggestion"
        onSubmit={handleSubmit}
        {...others}
      >
        <CloseButton alignSelf="flex-end" closeFunction={close} />
        
        <Flex flexDirection="column" alignItems="center" mx={[4]}>
          <Box as={Text} bold size={3} pt={3} alignSelf="flex-start">
            Háganos saber que podemos mejorar
          </Box>
          <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />
    
          <Bordered my={2} width={1}>
            <InputComponent
              name="name"
              type="text"
              placeholder="Nombre Completo"
            />
          </Bordered>
          {errors.name && touched.name && (
            <ErrorComponent>{errors.name}</ErrorComponent>
          )}

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
    
          <Bordered my={2} width={1}>
            <InputComponent
              placeholder="Mensaje"
              name="message"
              type="textarea"
              isMessage={true}
            />
          </Bordered>
          {errors.message && touched.message && (
            <ErrorComponent>{errors.message}</ErrorComponent>
          )}
    
          <Box
            width={1}
            as={BackgroundBox}
            backgroundColor="dark"
            pt="3px"
            mt={3}
          />
          <Flex alignSelf="flex-end" pr={5}>
            <Button
              kind="dark"
              size={2}
              css={{ cursor: 'pointer', borderTop: 'none' }}
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </Flex>
        </Flex>
      </Flex>
      )}
    </Formik>
  );
}

export default SuggestionBox;