import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email precisa ser válido')
    .required('Email precisa ser preenchido'),
  password: yup
    .string()
    .required('Senha precisa ser preenchida')
    .min(6, 'Mínimo de 6 caracteres')
});

export default LoginSchema;
