import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
  });

  const [signUp, setSignUp] = useState(false);

  let data = JSON.parse(localStorage.getItem("name"));
  const [signUpdata, setSignupData] = useState({});
  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(inputData));
    setSignUp(true);
  };
 

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        handleFormSubmit,
        handleChange,
        signUp,
        setSignUp,
        data,
        setIsAuth,
        inputData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
