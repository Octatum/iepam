import { string, object, boolean } from 'yup';

export const RegistrationValidation = object().shape({
  password: string().required('Por favor ingrese su contraseña'),
  email: string().required('Por favor ingrese su correo electrónico'),
  name: string().required('Por favor escriba su nombre'),
  termsConditions: boolean().oneOf([true], 'Debes aceptar las condiciones de privacidad')
});

export const LogingValidation = object().shape({
  password: string().required('Por favor ingrese su contraseña'),
  email: string().required('Por favor ingrese su correo electrónico'),
});

export const SuggestionBoxValidation = object().shape({
  message: string().required('Por favor escriba el mensaje que desea enviar'),
  email: string().required('Por favor ingrese su correo electrónico'),
  name: string().required('Por favor escriba su nombre'),
});

export const RestorePassValidation = object().shape({
  nameOrMail: string().required('Por favor ingrese su correo electrónico o su nombre de usuario'),
})