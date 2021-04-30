import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Mínimo de 2 caracteres')
    .required('Nome precisa ser preenchido'),
  email: yup
    .string()
    .email('Email precisa ser válido')
    .required('Email precisa ser preenchido'),
  password: yup
    .string()
    .required('Nova senha precisa ser preenchida')
    .min(6, 'Mínimo de 6 caracteres'),
  password_confirmation: yup
    .string()
    .test('passwords-match', 'As senhas precisam ser iguais', function (value) {
      return this.parent.password === value;
    })
});

export default RegisterSchema;
