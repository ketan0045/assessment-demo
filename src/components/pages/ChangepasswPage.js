import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../API/authRequest';

const ChangepasswPage = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm New Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // if (values.newPassword === values.confirmPassword) {
      //   // Passwords match, you can perform the change password action
      //   alert('Password changed successfully!');
      //   // Add additional logic as needed (e.g., API call to update password)
      // } else {
      //   // Passwords do not match
      //   alert('New passwords do not match. Please try again.');
      // }
      dispatch(changePassword(values));
    },
  });

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Change Password</h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        formik.touched.oldPassword && formik.errors.oldPassword
                          ? 'is-invalid'
                          : ''
                      }`}
                      id="oldPassword"
                      name="oldPassword"
                      placeholder="Enter your current password"
                      value={formik.values.oldPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.oldPassword && formik.errors.oldPassword && (
                      <div className="invalid-feedback">{formik.errors.oldPassword}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        formik.touched.newPassword && formik.errors.newPassword ? 'is-invalid' : ''
                      }`}
                      id="newPassword"
                      name="newPassword"
                      placeholder="Enter your new password"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <div className="invalid-feedback">{formik.errors.newPassword}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        formik.touched.confirmPassword && formik.errors.confirmPassword
                          ? 'is-invalid'
                          : ''
                      }`}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your new password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangepasswPage;



