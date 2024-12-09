import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.user);  // Access user data from Redux store

  if (!currentUser) {
    // If user is not logged in, redirect to the home page (login)
    return <Navigate to="/" />;
  }

  return children;  // If user is logged in, render the protected component (Browse)
};

export default PrivateRoute;
