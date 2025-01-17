import React, { useContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import "./Settings.css";
import Maps from "./Map";
import { LuPencil } from "react-icons/lu";
import { dividerClasses } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GetUserData } from "../PublicStore";
import { MessageContext } from "../context/MessageContext";

export default function Settings() {
  //   const myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "App 4275ab2b38eadbe0e424d6e099d26fe4-7c153adb-ffb3-40a0-84e9-44dfdbc11580"
  //   );
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Accept", "application/json");

  //   const raw = JSON.stringify({
  //     messages: [
  //       {
  //         destinations: [{ to: "972548016228" }],
  //         from: "napolyPizza",
  //         text: "Hi this is your code 1234 from napolyPizza",
  //       },
  //     ],
  //   });

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("https://qdegmw.api.infobip.com/sms/2/text/advanced", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error));

  const { addMessage } = useContext(MessageContext);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("ber sheva");
  const [language, setLanguage] = useState("EN");
  const [userData, setUserDate] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const data = await GetUserData();
      console.log(data);
      if (data.status > 299 && data.status < 499) {
        addMessage(`err get user ${data?.status}`, 1);
      } else {
        setUserDate(data.data);
      }
    } catch (err) {
      addMessage(err.message, 1);
    }
  }

  const navigate = useNavigate();

  // console.log(navigator.geolocation.getCurrentPosition(abc));
  function abc(a) {
    // console.log(a);
  }

  return (
    // <div className="settings">
    //   <div className="settings-box1">
    //     <img
    //       src="https://randomuser.me/api/portraits/men/21.jpg"
    //       alt="profile"
    //     />
    //     <div className="settings-inputs">
    //       <div className="phone-input">
    //         <input type="number" name="phone" value={123456} disabled />
    //         <LuPencil />
    //       </div>
    //       <div className="location-input">
    //         <input type="text" name="location" value={location} disabled />
    //         <LuPencil />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="settings-box2">
    //     <select
    //       name="language"
    //       onChange={(e) => {
    //         setLanguage(e.target.value);
    //       }}
    //       value={language}
    //     >
    //       <option value="AR">arabic</option>
    //       <option value="EN">english</option>
    //       <option value="HR">hebrew</option>
    //     </select>
    //     <div>light</div>
    //     <Maps/>
    //   </div>
    // </div>
    <div className="settings">
      <div className="settings-stack">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <IoIosArrowBack />
        </button>
        <h2>Settings</h2>
        <button>
          <MdDarkMode />
        </button>
      </div>
      <div className="settings-my-photo">
        <img
          src={"https://randomuser.me/api/portraits/men/21.jpg"}
          alt="profilePhoto"
        />
        <button>
          <FaPencilAlt />
        </button>
      </div>
      <div className="settings-inputs">
        <div className="settings-input">
          <label>Name</label>
          <div className="settings-input-edt">
            <input type="text" placeholder={userData?.name} />
            <button>
              <FaPencilAlt />
            </button>
          </div>
        </div>
        <div className="settings-input">
          <label>Email</label>
          <input type="text" placeholder={userData?.Email} />
        </div>
        <div className="settings-input">
          <label>Password</label>
          <input type="text" placeholder={userData?.password} />
        </div>
        <div className="settings-input">
          <label>Phone</label>
          <div className="settings-input-edt">
            <input type="text" placeholder={userData?.phone} />
            <button>
              <FaPencilAlt />
            </button>
          </div>
        </div>
        <div className="settings-input">
          <label>Location</label>
          <div className="settings-input-edt">
            <input type="text" placeholder={userData?.location} />
            <button>
              <FaPencilAlt />
            </button>
          </div>
        </div>
      </div>
      <button className="settings-log-out">sign out</button>
    </div>
  );
}
