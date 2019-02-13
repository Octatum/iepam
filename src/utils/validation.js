import { string, object } from 'yup';

const validation = object().shape({
  username: string().required(),
  password: string().required('Por favor ingrese su contraseña'),
  email: string().required('Por favor ingrese su correo electrónico'),
  name: string().required('Por favor escriba su nombre')
});

export default validation;
