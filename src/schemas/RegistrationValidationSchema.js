import * as Yup from "yup";

const noOnlySpacesRegex = /^(?!\s+$).+/;

const RegistrationValidationSchema = Yup.object({
  firstName: Yup.string().trim().required('First Name is required').matches(noOnlySpacesRegex, 'First Name cannot consist of only blank spaces'),
  lastName: Yup.string().trim().required('Last Name is required').matches(noOnlySpacesRegex, 'Last Name cannot consist of only blank spaces'),
  userName: Yup.string().trim().required('Username is required').matches(noOnlySpacesRegex, 'Username cannot consist of only blank spaces'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().trim().required('Password is required').matches(noOnlySpacesRegex, 'Password cannot consist of only blank spaces'),
  roleId: Yup.string().trim().required('Role ID is required').matches(noOnlySpacesRegex, 'Role ID cannot consist of only blank spaces'),
});

export default RegistrationValidationSchema; 




