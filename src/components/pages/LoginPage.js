import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Redux/Action/authAction";
import { Link } from "react-router-dom";
import Spinner from "../../common/Spinner/Spinner";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const StyledForm = styled(Form)`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessageDiv = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const LoginLink = styled.div`
  margin-top: 20px;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.app);

  const initialValues = {
    useremail: "",
    userpassword: ""
  };

  const validationSchema = Yup.object({
    useremail: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    userpassword: Yup.string()
      .required("Required")
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(loginUser(values));
    setSubmitting(false);
    navigate("/dashboard");
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <h2>Login</h2>
            <label htmlFor="useremail">Email</label>
            <StyledField name="useremail" type="email" />
            <ErrorMessage name="useremail" component={ErrorMessageDiv} />

            <label htmlFor="userpassword">Password</label>
            <StyledField name="userpassword" type="password" />
            <ErrorMessage name="userpassword" component={ErrorMessageDiv} />

            {error && <ErrorMessageDiv>{error}</ErrorMessageDiv>}
            <StyledButton type="submit" disabled={loading || isSubmitting}>
              {loading ? <Spinner /> : 'Login'}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
      <LoginLink>
        Don't have an account? <Link to="/register">Register here</Link>
      </LoginLink>
    </FormContainer>
  );
};

export default Login;



