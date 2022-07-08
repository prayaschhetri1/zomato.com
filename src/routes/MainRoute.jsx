import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import ProductCart from "./../pages/ProductCart";
import SingleItem from "./../pages/SingleItem";

const MainRoute = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ProductCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleItem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
