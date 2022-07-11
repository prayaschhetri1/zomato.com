import { TextField, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import "./Login.css";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main_wrapper">
    <div className="login_container">
      <p>LOGIN FORM</p>
      <TextField
        fullWidth
        id="standard-basic"
        size="400px"
        label="email*"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="password*"
        variant="standard"
      />
      
      <Button fullWidth  variant="contained" startIcon={<LockOpenIcon />}>
      <Typography variant="h6">LOGIN</Typography>
      </Button>
       <h5>New here ?  
        &nbsp;
        <Link to="/">
          Create your account
        </Link>
       </h5>
    </div>
    </div>
  );
};

export default Login;
