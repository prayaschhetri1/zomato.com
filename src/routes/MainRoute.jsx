import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/home/Home";
import Navbar from "../Components/navbar/Navbar";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import ProductCart from "./../pages/ProductCart";
import SingleItem from "./../pages/SingleItem";
import SignUp from './../pages/signUp/SignUp';
import RequireAuth from './../Components/HOC/RequireAuth';

const MainRoute = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProductCart />} />
        <Route path="/cart" element={<RequireAuth> <Cart /></RequireAuth>} />
        <Route path="/product/:id" element={<SingleItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
};

export default MainRoute;
