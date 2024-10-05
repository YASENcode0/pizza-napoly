import React, { useState } from "react";
import "./NavStack.css";
import { RiHome7Fill } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NavStack() {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();

  return (
    <div className="nav-stack">
      <div
        className={`nav-btn ${page == "cart" && "selected"}`}
        onClick={() => {
          setPage("cart");
          navigate("/cart");
        }}
      >
        <RiShoppingCartFill />
      </div>
      <div
        className={`nav-btn ${page == "home" && "selected"}`}
        onClick={() => {
          setPage("home");
          navigate("/");
        }}
      >
        <RiHome7Fill />
      </div>
      <div
        className={`nav-btn ${page == "profile" && "selected"}`}
        onClick={() => {
          setPage("profile");
          navigate("/profile");
        }}
      >
        <MdAccountCircle />
      </div>
    </div>
  );
}
