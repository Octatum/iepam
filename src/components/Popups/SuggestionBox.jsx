import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { withFormik } from 'formik';
import Text from '../Text';
import BackgroundBox from '../BackgroundBox';
import Button from '../Button';
import CloseButton from './CloseButton';
import validation from '../../utils/validation';
import Popup from 'reactjs-popup';

const BorderBox = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.dark};
`;
const Input = styled.input`
  border: none;
  width: 100%;
`;
const Message = styled.textarea`
  min-height: 10rem;
  resize: vertical;
  width: 100%;
  border: none;
`;

const InputComponent = ({ placeholder, type = 'text', name = '', value, handleChange, handleBlur, isMessage = false, ...other }) => (
  <BorderBox justifyContent="flex-start" alignItems="center" p={2} width={1} {...other}>
    <Text color="darkGray" size={1} as={isMessage ? Message : Input} placeholder={placeholder} type={type} name={name} value={value} onChange={handleChange} onBlur={handleBlur} />
  </BorderBox>
)

const ErrorComponent = ({ children }) => (
  <BackgroundBox width="100%" backgroundColor="errorRed" as={Box} p={2} mb={2} css={{ borderRadius: '10px' }}>
    <Text color="red">{children}</Text>
  </BackgroundBox>
)

const Login = ({
  triggerElement,
  setActive,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <Popup trigger={triggerElement} modal>
    {close => (
      <Flex flexDirection="column" mb={4} as="form" name="Suggestion" onSubmit={handleSubmit}>
        <CloseButton alignSelf="flex-end" closeFunction={close} />

        <Flex flexDirection="column" alignItems="center" mx={[4]}>
          <Box as={Text} bold size={2} pt={3} alignSelf="flex-start">
            Lorem Ipsum is simply dummy text
          </Box>
          <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" m={3} />

          <InputComponent my={2} placeholder="Nombre" name="name" type="text" value={values.name} handleBlur={handleBlur} handleChange={handleChange} />
          {errors.name && touched.name && <ErrorComponent>{errors.name}</ErrorComponent>}

          <InputComponent my={2} placeholder="Correo Electrónico" name="email" type="email" value={values.email} handleBlur={handleBlur} handleChange={handleChange} />
          {errors.email && touched.email && <ErrorComponent>{errors.email}</ErrorComponent>}

          <InputComponent my={2} placeholder="" name="message" type="textarea" value={values.message} handleBlur={handleBlur} handleChange={handleChange} isMessage={true} />
          {errors.message && touched.message && <ErrorComponent>{errors.message}</ErrorComponent>}

          <Flex >
            <BackgroundBox backgroundColor="darkGray" as={Box} width="30px" css={{ height: "30px" }} mr={3} />
            <Flex flexDirection="column" width="calc(100% - 30px - 3rem)">
              <Text size={1.5}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cumque voluptatibus eligendi totam explicabo dolore ipsam dolorem, eveniet illum quod nobis laboriosam tenetur facilis commodi.
              </Text>
            </Flex>
          </Flex>
          <Box width={1} as={BackgroundBox} backgroundColor="dark" pt="3px" mt={3} />
          <Flex alignSelf="flex-end" pr={5}>
            <Button kind="dark" size={2} css={{ cursor: 'pointer', borderTop: 'none' }}>Enviar</Button>
          </Flex>
        </Flex>
      </Flex>
    )}
  </Popup>
)

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', captcha: false }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2))
  },
  displayName: 'LoginForm',
})(Login);