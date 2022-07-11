import { TextField, Typography } from "@mui/material";

import { Button } from "@mui/material";
import "./Login.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { data, setIsAuth, isAuth } = useContext(AuthContext);
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || '/'
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (data.email === formData.email && data.password === formData.password) {
      setIsAuth(true);
      alert("Yippy you have successfully logged in .. Enjoy your shopping😍");
      setIsLoggedIn(true);
      navigate(comingFrom,{replace:true})
       
      
    } else {
      setIsLoggedIn(false);
    }
  };

  

  return (
    <div className="main_wrapper">
      <div className="login_container">
        <p>LOGIN FORM</p>
        <form onSubmit={handleSubmitLogin}>
          <TextField
            onChange={handleChange}
            name="email"
            value={formData.email}
            fullWidth
            id="standard-basic"
            size="400px"
            label="email*"
            variant="standard"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={formData.password}
            fullWidth
            id="standard-basic"
            label="password*"
            variant="standard"
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            startIcon={<LockOpenIcon />}
          >
            <Typography variant="h6">LOGIN</Typography>
          </Button>
        </form>
        {!isLoggedIn && <h5>Credential is not matched please try again..</h5>}
        <h5>
          New here ? &nbsp;
          <Link to="/signup">Create your account</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
