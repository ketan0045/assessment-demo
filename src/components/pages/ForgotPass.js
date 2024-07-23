import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { forgotPass } from '../../Redux/Action/authAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPass = () => {
  const dispatch = useDispatch();
  
  const initialValues = {
    emailOrNumber: '',
  };

  const validationSchema = Yup.object().shape({
    emailOrNumber: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = (values) => {
    console.log('Email submitted for password reset:', values.emailOrNumber);
    dispatch(forgotPass(values));
    toast.success('resetPass successful',{theme: "dark",}); 
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Forgot Password</h3>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="emailOrNumber">Email:</label>
                    <input
                      type="email"
                      className={`form-control ${formik.touched.emailOrNumber && formik.errors.emailOrNumber ? 'is-invalid' : ''}`}
                      id="emailOrNumber"
                      placeholder="Enter your email"
                      value={formik.values.emailOrNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.emailOrNumber && formik.errors.emailOrNumber && (
                      <div className="invalid-feedback">{formik.errors.emailOrNumber}</div>
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

export default ForgotPass;


