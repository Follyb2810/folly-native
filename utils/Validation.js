import { Formik } from 'formik';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    Age: Yup.string().required('Age is required'),
    location: Yup.string().required('Location is required'),
    skin: Yup.string().required('Skin Type is required'),
    occupation: Yup.string().required('Occupation is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  