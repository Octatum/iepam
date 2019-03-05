import { string, object, boolean } from 'yup';

export const RegistrationValidation = object().shape({
  password: string().required('Por favor ingrese su contraseña'),
  email: string().required('Por favor ingrese su correo electrónico'),
  name: string().required('Por favor escriba su nombre'),
  termsConditions: boolean().oneOf([true], 'Debes aceptar las condiciones de privacidad'),
  sexo: string().oneOf(['hombre', 'mujer', 'otro'], "Por favor seleccione su genero"),
  nacimiento: object().shape({
    dia: string().required("Por favor indique su día de nacimiento"),
    mes: string().notOneOf(["Mes", "mes", ""], "Por favor ingrese su mes de nacimiento"),
    ano: string().required("Por favor ingrese su año de nacimiento")
  }).required("Por favor ingrese su fecha de nacimiento completa")
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