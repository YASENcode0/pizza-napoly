import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/photos/pizza-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Menu from "../DropMenu/Menu";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`nav-box `}>
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      {/* <div className="buttons">
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FaCartShopping />
          <span>5</span>
        </div>
        <div className="profile">
          <CgProfile
            onClick={() => {
              setMenu(!menu);
            }}
          />
          <Menu on={menu} />
        </div>
      </div> */}
    </div>
  );
}
