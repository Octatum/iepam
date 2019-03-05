import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { withFormik } from 'formik';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import { SuggestionBoxValidation as validation } from '../../utils/validation';
import { encode } from '../../utils/formEncode';
import InputComponent from './InputComponent';

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

const SuggestionBox = ({
  close,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <Flex
    flexDirection="column"
    mb={4}
    as="form"
    name="Suggestion"
    onSubmit={handleSubmit}
  >
    <CloseButton alignSelf="flex-end" closeFunction={close} />

    <Flex flexDirection="column" alignItems="center" mx={[4]}>
      <Box as={Text} bold size={3} pt={3} alignSelf="flex-start">
        Lorem Ipsum is simply dummy text
      </Box>
      <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

      <InputComponent
        my={2}
        placeholder="Nombre"
        name="name"
        type="text"
        value={values.name}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      {errors.name && touched.name && (
        <ErrorComponent>{errors.name}</ErrorComponent>
      )}

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
        placeholder=""
        name="message"
        type="textarea"
        value={values.message}
        handleBlur={handleBlur}
        handleChange={handleChange}
        isMessage={true}
      />
      {errors.message && touched.message && (
        <ErrorComponent>{errors.message}</ErrorComponent>
      )}

      <Flex>
        <BackgroundBox
          backgroundColor="darkGray"
          as={Box}
          width="30px"
          css={{ height: '30px' }}
          mr={3}
        />
        <Flex flexDirection="column" width="calc(100% - 30px - 3rem)">
          <Text size={1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            cumque voluptatibus eligendi totam explicabo dolore ipsam dolorem,
            eveniet illum quod nobis laboriosam tenetur facilis commodi.
          </Text>
        </Flex>
      </Flex>
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
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', captcha: false }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    fetch('/suggestion', {
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
      });
  },
  displayName: 'SuggestionForm',
})(SuggestionBox);
