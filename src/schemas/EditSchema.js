import * as yup from 'yup';

const EditSchema = yup.object().shape({
  email: yup.string().email('Email precisa ser válido'),
  name: yup.string(),
  lastname: yup.string(),
  phone: yup.string(),
  birthday: yup.date('Precisa ser uma data válida'),
  address: yup.string()
});

export default EditSchema;
