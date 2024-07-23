import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { resetPass } from '../../Redux/Action/authAction';
import { toast } from 'react-toastify';
import { changePassword } from '../../API/authRequest';



const ResetPass = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const token = url.searchParams.get("emailVerificationToken");

  const initialValues = {
    newPassword: '',
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = (values) => {
    console.log('Email submitted for password reset:', values.emailOrNumber);
    values.resetPasswordToken = token
    dispatch(resetPass(values));
    toast.success('Reset password successful',{theme: "dark",}); 
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Reset Password</h3>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="emailOrNumber">Email</label>
                    <input
                      name='newPassword'
                      type="email"
                      className={`form-control ${formik.touched.newPassword && formik.errors.newPassword ? 'is-invalid' : ''}`}
                      id="newPassword"
                      placeholder="Enter your email"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <div className="invalid-feedback">{formik.errors.newPassword}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
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

export default ResetPass;


          



