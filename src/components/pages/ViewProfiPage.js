// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { getMyProfile, editUserProfile } from '../../Redux/Action/authAction';

// import Header from './Header';

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   userName: Yup.string().required('User Name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   phoneNumber: Yup.string().required('Phone Number is required'),
//   profileImage: Yup.string()
//     .required('Profile Image URL is required')
//     .test('is-valid-image', 'Invalid image format', (value) => {
//       return value && /\.(jpg|jpeg|png|gif)$/i.test(value);
//     }),
//   status: Yup.string().required('Status is required'),
// });

// const ViewProfilePage = () => {
//   const [operation, setOperation] = useState('View')
//   const [file, setFile] = useState()
//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);
//   const userProfile = authState.user?.data;

//   useEffect(() => {
//     dispatch(getMyProfile());
//     // setGetProfile(userProfile)
//   }, [dispatch]);

//   const formik = useFormik({
//     initialValues: {
//       firstName: userProfile?.firstName,
//       lastName: userProfile?.lastName,
//       userName: userProfile?.userName,
//       email: userProfile?.email,
//       phoneNumber: userProfile?.phoneNumber,
//       // profileImage: userProfile?.profileImage,
//       status: userProfile?.status,
//     },
//     enableReinitialize: true,
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       values.id = userProfile?.id
//       values.profileImage = file
//       dispatch(editUserProfile(values));
//       alert('Profile Updated Successfully');
//     },
//   });

//   const onClickPress = (e) => {
//     e.preventDefault()
//     if (operation === 'View') {
//       setOperation('Edit')
//     } else {
//       setOperation('View')
//     }
//   }

//   return (
//     <>
//       <Header />
//       <button className="btn btn-dark w-45 mt-3" onClick={onClickPress} style={{ marginLeft: "65%" }}>
//         {/* {operation} */}
//         Edit
//       </button>
//       <div className="container mt-2">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 {/* <button onClick={onClickPress}>{operation}</button> */}

//                 <h5 className="card-title text-center mb-4">{operation} Profile</h5>
//                 {/* <form onSubmit={formik.onSubmit}> */}
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   formik.handleSubmit(e);
//                 }}>
//                   {/* Input fields */}
//                   <div className="mb-3">
//                     <label className="form-label">First Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       {...formik.getFieldProps('firstName')}
//                     />
//                     {formik.touched.firstName && formik.errors.firstName && (
//                       <div className="text-danger">{formik.errors.firstName}</div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Last Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       {...formik.getFieldProps('lastName')}
//                     />
//                     {formik.touched.lastName && formik.errors.lastName && (
//                       <div className="text-danger">{formik.errors.lastName}</div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">User Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       {...formik.getFieldProps('userName')}
//                     />
//                     {formik.touched.userName && formik.errors.userName && (
//                       <div className="text-danger">{formik.errors.userName}</div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       {...formik.getFieldProps('email')}
//                     />
//                     {formik.touched.email && formik.errors.email && (
//                       <div className="text-danger">{formik.errors.email}</div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Phone Number</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       {...formik.getFieldProps('phoneNumber')}
//                     />
//                     {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                       <div className="text-danger">{formik.errors.phoneNumber}</div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Profile Image URL</label>
//                     <input
//                       type="file"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       // {...formik.getFieldProps('profileImage')}
//                       // onChange={(e) => {
//                       //   setFile(e.target.files[0])
//                       // }}
//                     />
//                     {formik.touched.profileImage && formik.errors.profileImage && (
//                       <div className="text-danger">{formik.errors.profileImage}</div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Status</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       disabled={operation === 'View'}
//                       {...formik.getFieldProps('status')}
//                     />
//                     {formik.touched.status && formik.errors.status && (
//                       <div className="text-danger">{formik.errors.status}</div>
//                     )}
//                   </div>

//                   {/* Edit Profile Button */}
//                   {operation === 'Edit' && (
//                     <button type="submit" className="btn btn-primary w-100">
//                       Edit Profile
//                     </button>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewProfilePage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getMyProfile, editUserProfile } from '../../Redux/Action/authAction';

import Header from './Header';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  userName: Yup.string().required('User Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  profileImage: Yup.string().url('Invalid URL').required('Profile Image URL is required'),
  status: Yup.string().required('Status is required'),
});

const ViewProfilePage = () => {
  const [operation, setOperation] = useState('View')
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const userProfile = authState.user?.data;

  useEffect(() => {
    dispatch(getMyProfile());
    // setGetProfile(userProfile)
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      userName: userProfile?.userName,
      email: userProfile?.email,
      phoneNumber: userProfile?.phoneNumber,
      profileImage: userProfile?.profileImage,
      status: userProfile?.status,
    },
    enableReinitialize: true,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      // e.preventDefault()
      values.id = userProfile?.id
      //       values.profileImage = file
      console.log(values, "nnnnnn")
      dispatch(editUserProfile(values));
      alert('Profile Updated Successfully');
    },
  });

  const onClickPress = (e) => {
    if (operation === 'View') {
      setOperation('Edit')
    } else {
      setOperation('View')
    }
  }

  return (
    <>
      <Header />
      <button className="btn btn-dark w-45 mt-3" onClick={onClickPress} style={{ marginLeft: "65%" }}>
        {/* {operation} */}
        Edit
      </button>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                {/* <button onClick={onClickPress}>{operation}</button> */}
                <h5 className="card-title text-center mb-4">{operation} Profile</h5>
                {/* <form onSubmit={formik.onSubmit}>    */}
                <form onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit(e);
                }}>
                  {/* Input fields */}
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="text-danger">{formik.errors.firstName}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="text-danger">{formik.errors.lastName}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('userName')}
                    />
                    {formik.touched.userName && formik.errors.userName && (
                      <div className="text-danger">{formik.errors.userName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                      <div className="text-danger">{formik.errors.phoneNumber}</div>
                    )}
                  </div>

                  {/*
                  <div className="mb-3">
                    <label className="form-label">Profile Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('profileImage')}
                    />
                    {formik.touched.profileImage && formik.errors.profileImage && (
                      <div className="text-danger">{formik.errors.profileImage}</div>
                    )}
                  </div> */}

                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={operation === 'View'}
                      {...formik.getFieldProps('status')}
                    />
                    {formik.touched.status && formik.errors.status && (
                      <div className="text-danger">{formik.errors.status}</div>
                    )}
                  </div>

                  {/* Edit Profile Button */}
                  {operation === 'Edit' && (
                    <button type="submit" className="btn btn-primary w-100">
                      Edit Profile
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfilePage;



