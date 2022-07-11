import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import StyledBadge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppContext } from '../../context/AuthContext';

import { useSelector } from 'react-redux';
const Navbar = () => {
  const cartItem = useSelector((state) => state.appReducer.cartItem)
  return (
    <div className="main-div">
      <div className="nav-div">
        <div style={{ display: "flex", gap: "35px" }}>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            width="140"
            height="30"
            alt=""
          />
          <NavLink
            to="/product"
            className="navStyle"
            style={({ isActive }) => ({
              color: isActive ? "rgb(22, 115, 214)" : "white",
            })}
          >
            <h4>Mens & Womens</h4>
          </NavLink>
        </div>
        <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
          <NavLink
            className="navStyle"
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "rgb(22, 108, 214)" : "white",
            })}
          >
            <h4>Login</h4>
          </NavLink>
          <NavLink
            className="navStyle"
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "white",
            })}
          >
            <IconButton aria-label="cart" style={{ color: "#fff" }}>
              <StyledBadge badgeContent={cartItem && cartItem.length} color="success">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
