import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyProfileAcc, logInUser, registerUser,editProfile,forgotPassword,resetPassword} from "../../API/authRequest";

export const loginUserAction = createAsyncThunk(
  "loginUser",
  async (formData) => {
    try {
      const response = await logInUser(formData); 
      return response; 
    } catch (error) {
      throw error.response.data;
    }
  }
);


export const registerUserAction = createAsyncThunk(
  "registerUser",
  async (formData) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    try {
      const response = await registerUser(formData);
      console.log(registerUser)
      console.log(response,"fffffffffffffffffffffffff")
      return response;
    } catch (error) {
      throw error.response.data; 
    }
  }
);


export const getMyProfile = createAsyncThunk("getMyProfile", async () => {
  try {
    const storage = JSON.parse((localStorage.getItem("TOKEN")))
    const response = await getMyProfileAcc(storage.user.id); 
    return response; 
  } catch (error) {
    throw error.response.data; 
  }
});


// export const logOutProfile = createAsyncThunk("logOutProfile", async () => {
//   try {
//     const response = await logOut();
//     return response; 
//   } catch (error) {
//     throw error.response.data; 
//   }
// });


export const editUserProfile = createAsyncThunk("editUserProfile", async (values) => {
 try {
  const formdata= new FormData();
  formdata.append('firstName',values.firstName)
  formdata.append('lastName',values.lastName)
  formdata.append('userName',values.userName)
  formdata.append('email',values.email)
  formdata.append('phoneNumber',values.phoneNumber)
  formdata.append('profileImage',values.profileImage)
  formdata.append('status',values.status)
    const response = await editProfile(values.id, formdata); 
    return response; 
  } catch (error) {
    throw error.response.data; 
  }

});


export const forgotPass = createAsyncThunk("forgotPass", async (email) => {
  try {
    const response = await forgotPassword(email); 
    return response; 
  } catch (error) {
    throw error.response.data; 
  }
});

export const resetPass = createAsyncThunk("forgotPass", async (data) => {
  try {
    const response = await resetPassword(data); 
    return response; 
  } catch (error) {
    throw error.response.data; 
  }
});

