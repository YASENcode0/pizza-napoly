import React from "react";
import "./Nav.css";
import logo from "../../assets/photos/pizza-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export default function Nav() {
  return (
    <div className="nav-box">
      <img src={logo} alt="logo" />
      <div className="buttons">
        <div className="cart">
          <FaCartShopping />
        </div>
        <div className="profile">
          <CgProfile />
        </div>
      </div>
    </div>
  );
}
