import React, { useState } from "react";
import "./log.css";
import { LogIn } from "../PublicStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState({});
  const [errMsg, setErrMsg] = useState({});

  //var
  const navigate = useNavigate();

  //methods
  function HandleValue(inputName, value) {
    setUserData({ ...userData, [inputName]: value });
    removeError(inputName);
  }

  function formSubmit(e) {
    e.preventDefault();

    //validate
    if (!userData?.phone || userData?.phone.length < 10) {
      console.log("phone err");
      setErrMsg({
        ...errMsg,
        phone: "Phone number must be at least 10 digits",
      });
      return;
    } else if (!userData?.password || userData?.password.length < 4) {
      setErrMsg({ ...errMsg, password: "password should be 4 deg and more" });
      return;
    }

    LogIn(userData).then((ret) => {
      if (ret.pass) {
        navigate("/");
      } else {
        setErrMsg({ ...errMsg, loading: "err sign up! try again later" });
      }
    });
  }

  function removeError(field) {
    setErrMsg((prev) => {
      const errs = { ...prev };
      delete errs[field];
      return errs;
    });
  }

  return (
    <div className="log-form">
      <div className="login">
        <h1>log in</h1>
        <form onSubmit={formSubmit}>
          <div className="field">
            <label>phone</label>
            <input
              name="phone"
              type="number"
              onChange={(e) => {
                HandleValue(e.target.name, e.target.value);
              }}
              value={userData?.phone || ""}
              autoFocus
            />
            <p>{errMsg?.phone}</p>
          </div>

          <div className="field">
            <label>password</label>
            <input
              name="password"
              type="password"
              onChange={(e) => {
                HandleValue(e.target.name, e.target.value);
              }}
              value={userData?.password || ""}
            />
            <p>{errMsg?.password}</p>
          </div>
          <button>sub</button>
          <h3>{errMsg?.loading}</h3>
        </form>
      </div>
    </div>
  );
}
