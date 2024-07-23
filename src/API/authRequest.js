import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://172.16.0.8:3001/api/v1",
}); 

const storage = JSON.parse((localStorage.getItem("TOKEN")))
console.log(storage)

const userApi = axios.create({
  // baseURL: "http://172.16.0.8:3002/api/v1/",
  headers: {
    "Authorization": `Bearer ${storage?.token}`,
  },
  withCredentials: true
});

// HTML,css,js,react,node   
export const registerUser = (formData) =>
  authAPI.post("/users", formData, { withCredentials: true });

export const logInUser = (formData) =>
  authAPI.post("/users/login", formData, { withCredentials: true }); 
  
export const getMyProfileAcc = (userId) => userApi.get(`users/details/${userId}`);

// export const logOut = () => authAPI.get("/logout", { withCredentials: true });

export const editProfile = (id,updatedData) =>
userApi.put(`/users/${id}`, updatedData, { withCredentials: true });

export const changePassword = (data) =>
authAPI.post(`users/change/password`, data, { withCredentials: true , headers: {
  "Authorization": `Bearer ${storage?.token}`,
},});

export const forgotPassword = (data) =>
authAPI.post(`users/forgot/password`, data, { withCredentials: true , headers: {
  "Authorization": `Bearer ${storage?.token}`,
},});

export const resetPassword = (data) =>
authAPI.post(`users/reset/password`, data, { withCredentials: true , headers: {
  "Authorization": `Bearer ${storage?.token}`,
},});










