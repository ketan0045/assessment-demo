import * as Yup from "yup";

const LoginPageValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
  });

export default LoginPageValidationSchema



