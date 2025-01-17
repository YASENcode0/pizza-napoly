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
         <div className="profile-stack">
            <button>back</button>
            <button>setting</button>
         </div>
         <div className="profile-user">
            <img
               src="https://randomuser.me/api/portraits/men/21.jpg"
               alt="user"
            />
            <div className="profile-user-details">
               <h1>name</h1>
               <h3>email</h3>
            </div>
         </div>
      </div>
   );
}
