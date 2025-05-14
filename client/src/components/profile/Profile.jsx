import React from "react";
import "./Profile.css";
import { GetUserData, UseTranslate } from "../PublicStore";
import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

export default function Profile() {
  //var
  const userData = GetUserData();
  console.log(userData);
  const navigate = useNavigate();
  //var

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
      <div className="profile-stack">
        <button>
          <IoIosArrowBack />
        </button>
        <h2>Settings</h2>
        <button>
          <IoIosSettings />
        </button>
      </div>
      <div className="profile-user">
        <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="user" />
        <div className="profile-user-details">
          <h1>name</h1>
          <p>email</p>
        </div>
      </div>
      <div className="profile-mnu">
        <div className="profile-mnu-btn">
          <h2 className="profile-mnu-btn-title">
            <div>i</div>title
          </h2>
          <div>i</div>
        </div>
      </div>
    </div>
  );
}
