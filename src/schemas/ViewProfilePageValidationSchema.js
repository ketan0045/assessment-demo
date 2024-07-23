import * as Yup from "yup";

const ViewProfilePageValidationSchema =  Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    userName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    profileImage: Yup.string().url('Invalid URL').required('Profile Image URL is required'),
    status: Yup.string().required('Status is required'),
  });

export default ViewProfilePageValidationSchema

