
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

const withAuth = (WrappedComponent) => {
  return () => {
    const { isAuthenticated } = useAuth();

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent />;
  };
};

export default withAuth;
