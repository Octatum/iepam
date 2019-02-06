import { string, object } from 'yup';

const validation = object().shape({
  username: string().required(),
  password: string().required("por favor ingrese su contraseña"),
  email: string().required("Por favor ingrese su correo electrónico"),
})


export default validation;