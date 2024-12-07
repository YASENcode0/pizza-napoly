import React from "react";
import "./Profile.css";
import { GetUserDetails, UseTranslate } from "../PublicStore";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  //var
  const userData = GetUserDetails();
  console.log(userData);
  const navigate = useNavigate();

  //methods
  function signOut() {}
  function goLogIn() {
    navigate("/login");
  }
  function goSignUp() {
    navigate("/signup");
  }

  return (
    <div className="profile">
      {/* <div className="profile-top">
        0 for style top
      </div> */}
      <div className="user-details">
        <div className="profile-box1">
          <h2>{userData?.name}</h2>
          <div className="user-phone-input">
            <input type="number" name="" id="" placeholder={userData?.phone} />
            <span>0</span>
          </div>
        </div>
        <div className="user-orders">
          <p>no orders</p>
        </div>
      </div>
      <div className="log-btns">
        {userData ? (
          <>
            <button onClick={goSignUp}>{UseTranslate("sign up")}</button>
            <button onClick={goLogIn}>{UseTranslate("log in")}</button>
          </>
        ) : (
          <button>{UseTranslate("sign out")}</button>
        )}
      </div>
    </div>
  );
}
