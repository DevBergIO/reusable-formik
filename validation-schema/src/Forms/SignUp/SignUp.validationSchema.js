import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().min(2, ' FirstName Too Short').max(20, 'FirstName Too Long').required(),
  lastName: yup.string().min(2, 'Too Short').max(20, 'Too Long').required(),
  email: yup.string().email().required(),
  password: yup.string().password,
});
