import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/pages/Registration';
import LoginPage from './components/pages/LoginPage';
import DashBoard from './components/pages/DashBoard';
import ChangepasswPage from './components/pages/ChangepasswPage';
import ViewProfiPage from './components/pages/ViewProfiPage';
import { PrivateRoute } from './PrivateRoute';
import ForgotPass from './components/pages/ForgotPass';
import ResetPass from './components/pages/ResetPass';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/charts/Home';
import About from './components/charts/About';

const App = () => {

  console.log(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/dashBoard" element={<DashBoard />} />
          <Route exact path="/viewProfiPage" element={<ViewProfiPage/>} />
          <Route exact path="/changepasswPage" element={<ChangepasswPage/>} />
          <Route exact path="/forgotPass" element={<ForgotPass/>} />
          <Route exact path="/reset-password" element={<ResetPass/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path="/dashboard"
              element={
                <DashBoard />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer  />
    </>
  );
};

export default App;


// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Registration from './components/pages/Registration';
// import LoginPage from './components/pages/LoginPage';
// import DashBoard from './components/pages/DashBoard';
// import ChangepasswPage from './components/pages/ChangepasswPage';
// import ViewProfiPage from './components/pages/ViewProfiPage';
// import { PrivateRoute } from './PrivateRoute';
// import ForgotPass from './components/pages/ForgotPass';
// import ResetPass from './components/pages/ResetPass';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const isAuthenticated = () => {
//   const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
//   return !!user;
// };

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<LoginPage />} />
//           <Route exact path="/registration" element={<Registration />} />
//           <Route exact path="/forgotPass" element={<ForgotPass />} />
//           <Route exact path="/reset-password" element={<ResetPass />} />

//           <Route
//             path="/"
//             element={isAuthenticated() ? <PrivateRoute /> : <Navigate to="/" replace />}
//           >
//             {/* Private routes */}
//             <Route exact path="/dashboard" element={<DashBoard />} />
//             <Route exact path="/viewProfiPage" element={<ViewProfiPage />} />
//             <Route exact path="/changepasswPage" element={<ChangepasswPage />} />
//             {/* <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer  />
//     </>
//   );
// };

// export default App;


