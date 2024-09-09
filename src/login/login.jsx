import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react"
import { useContext } from "react";
import { useAuth } from "../authContext";
import Input from "../ReuseCompoent/input";
const Login = () => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const {login} = useAuth();

    const navigate = useNavigate();
    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("proceed");
            navigate("/dashboard");
        }

    }

    const validate = () => {
        let result = true;
        if (Username === '' && Username === null)
        {
            console.log(Username);
            return false;
            
        } 
        if (Password === '' && Password === null)
        {
            console.log(Password);
            return false;
            
        }
        login();
        return result;

    }
  return (
    <div className="addUser">
      <h1>User Login </h1>
      <form className="addUserForm" onSubmit={proceedLogin}>
        <div className="inputGroups">
          
          <label htmlFor="username"> Username  <span className="errmsg">   *</span></label>
          <input
            type="text"
            id="username"
            autoComplete="off"
                      placeholder="Enter Username"
                      value={Username} onChange={e=> setUsername(e.target.value)}
          />
         
          <label htmlFor="password"> Password  <span className="errmsg">   *</span></label>
            <Input
            type={"Password"}
            autoComplete="off"
            id="password"
            value={Password}
            onChange={e=> setPassword(e.target.value)}
            placeholder={"Enter Password"}
          />
                  
            <button type="submit" className="btn btn-success registerbtn">Login</button>
        </div>
          </form>
          <div className="login">              
          </div>
    </div>
  );
};

export default Login;
