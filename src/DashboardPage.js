// DashboardPage.js
import React from 'react';
import withAuth from './WithAuthHOC';
import { useNavigate } from "react-router-dom";
import { useAuth } from './authContext';

const DashboardPage = () => {

    const {logout} = useAuth();
    
    const navigate= useNavigate();

    const logoutNavigation =()=>{
        logout();
        navigate('/')
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button onClick={logoutNavigation}> logout</button>
    </div>
  );
};

export default withAuth(DashboardPage);
