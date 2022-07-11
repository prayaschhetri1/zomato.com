import React, { useContext } from "react";
import "./SignUp.css";
import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
 
const navigate = useNavigate()
 const {handleFormSubmit,
    handleChange,
    signUp,
    inputData} = useContext(AuthContext)
    
 if(signUp){
    navigate("/login")
 }

  return (
    <div className="main_wrapper">
      <div className="signup_container">
        <p>SIGN UP FORM</p>
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            onChange={handleChange}
            name="fullName"
            type="text"
            value={inputData.fullName}
            fullWidth
            id="standard-basic"
            size="400px"
            label="full name"
            variant="standard"
          />
         

          <TextField
            required
            onChange={handleChange}
            name="email"
            type="email"
            value={inputData.email}
            fullWidth
            id="standard-basic"
            size="400px"
            label="email"
            variant="standard"
            
          />
          <h5>Gender</h5>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />

            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="others" control={<Radio />} label="Male" />
          </RadioGroup>

          <TextField
            onChange={handleChange}
            name="password"
            type="password"
            required
            value={inputData.password}
            fullWidth
            id="standard-basic"
            label="password"
            variant="standard"
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            startIcon={<LockOpenIcon />}
          >
            <Typography variant="h6">SIGNUP</Typography>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
