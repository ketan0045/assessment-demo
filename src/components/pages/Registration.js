import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUserAction } from '../../Redux/Action/authAction';
import RegistrationValidationSchema from "../../schemas/RegistrationValidationSchema"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      roleId: '',
    },
    validationSchema: RegistrationValidationSchema,
    onSubmit: (values) => {
      try {
        console.log('Registration submitted:', values);
        dispatch(registerUserAction(values));
        formik.resetForm();
        navigate('/dashboard'); 
        toast.success('Registration successful',{theme: "dark",}); 
      } catch (error) {
        console.error('Registration failed:', error);
        toast.error('Registration failed. Please check your credentials.'); 
      }
    },

  });

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Registration</h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="invalid-feedback">{formik.errors.firstName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="invalid-feedback">{formik.errors.lastName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.userName && formik.errors.userName ? 'is-invalid' : ''}`}
                      id="userName"
                      name="userName"
                      placeholder="Enter your username"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.userName && formik.errors.userName && (
                      <div className="invalid-feedback">{formik.errors.userName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="roleId" className="form-label">Role ID</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.roleId && formik.errors.roleId ? 'is-invalid' : ''}`}
                      id="roleId"
                      name="roleId"
                      placeholder="Enter your role id"
                      value={formik.values.roleId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.roleId && formik.errors.roleId && (
                      <div className="invalid-feedback">{formik.errors.roleId}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;


