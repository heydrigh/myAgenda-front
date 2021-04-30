import * as yup from 'yup';

const CreateSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email precisa ser válido')
    .required('O campo precisa ser preenchido'),
  name: yup.string().required('O campo precisa ser preenchido'),
  lastname: yup.string().required('O campo precisa ser preenchido'),
  phone: yup.string().required('O campo precisa ser preenchido'),
  birthday: yup
    .string('Precisa ser uma data válida')
    .required('O campo precisa ser preenchido'),
  address: yup.string().required('O campo precisa ser preenchido')
});

export default CreateSchema;
