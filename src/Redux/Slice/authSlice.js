  import { createSlice } from "@reduxjs/toolkit";
  import { getMyProfile, loginUserAction, registerUserAction,editUserProfile } from "../Action/authAction";

  const initialState = {
    isAuthenticated: null,
    error: null,
    
    message: null,
    loading: false,
    user: null,
  };


  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      clearError: (state) => {
        state.error = null; 
      },
      clearMessage: (state) => {
        state.message = null; 
      },
      updateProfile: (state, action) => {
        state.user = {
          ...state.user,
          ...action.payload.data.user,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUserAction.pending, (state) => {
          state.status = "loading";
          state.loading = true;
        })
        .addCase(loginUserAction.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.data.user;
          localStorage.setItem('TOKEN', JSON.stringify(action.payload.data.data));
        })
        .addCase(loginUserAction.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
          state.loading = false;
          state.isAuthenticated = false;
        })
        .addCase(registerUserAction.pending, (state) => {
          state.status = "loading";
          state.loading = true;
        })
        .addCase(registerUserAction.fulfilled, (state, action) => {

          console.log(action.payload)
          state.status = "succeeded";
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.data.data;
          localStorage.setItem('user', JSON.stringify(action.payload.data.data));

        })  
        .addCase(registerUserAction.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
          state.loading = false;
          state.isAuthenticated = false;
        })
        .addCase(getMyProfile.pending, (state) => {
          state.status = "loading";
          state.loading = true;
        })
        .addCase(getMyProfile.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.data;
        })
        .addCase(getMyProfile.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
          state.loading = false;
          state.isAuthenticated = false;
        })

        .addCase(editUserProfile.pending, (state) => {
          state.status = "loading";
          state.loading = true;
        })
        .addCase(editUserProfile.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.data.user;
        })
        .addCase(editUserProfile.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
          state.loading = false;
          state.isAuthenticated = false;
        })
      //   .addCase(logOutProfile.pending, (state) => {
      //     state.status = "loading";
      //     state.loading = true;
      //   })
      //   .addCase(logOutProfile.fulfilled, (state, action) => {
      //     state.status = "succeeded";
      //     state.loading = false;
      //     state.isAuthenticated = false;
      //     state.user = null;
      //   })
      //   .addCase(logOutProfile.rejected, (state, action) => {
      //     state.status = "failed";
      //     state.error = action.error.message;
      //     state.loading = false;
      //   })
      //   .addCase(updatePasswordAction.pending, (state) => {
      //     state.status = "loading";
      //     state.loading = true;
      //   })
      //   .addCase(updatePasswordAction.fulfilled, (state, action) => {
      //     state.status = "succeeded";
      //     state.loading = false;
      //     state.isAuthenticated = false;
      //   })
      //   .addCase(updatePasswordAction.rejected, (state, action) => {
      //     state.status = "failed";
      //     state.error = action.error.message;
      //     state.loading = false;
      //   });
    },
  });

  export default authSlice.reducer;
  export const { clearError, updateProfile } = authSlice.actions; 




  


  