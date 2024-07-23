// import { Navigate, Outlet } from "react-router-dom";
// import React from "react";
// import { useSelector } from "react-redux";

// export const PrivateRoute = ({ path, element: Element, ...props }) => {
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   console.log(isAuthenticated)

//   return !isAuthenticated === false || !isAuthenticated === null  ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/" />
//   );
// };

import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ path, element: Element, ...props }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return !isAuthenticated === false || !isAuthenticated === null ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
