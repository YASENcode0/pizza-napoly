import React, { useState } from "react";
import { CreateNewUser } from "../PublicStore";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const [newUser, setNewUser] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const [showPass, setShowPass] = useState(false);

  //var
  const navigate = useNavigate();

  //methods
  function handleInput(inputName, value) {
    setNewUser({ ...newUser, [inputName]: value });
    removeError(inputName);
  }

  function signUp(e) {
    e.preventDefault();

    //validate
    if (!newUser?.name || newUser?.name.length < 3) {
      setErrMsg({ ...errMsg, name: "name should be 3 char and more" });
      return;
    } else if (!newUser?.phone || newUser?.phone.length < 10) {
      setErrMsg({
        ...errMsg,
        phone: "Phone number must be at least 10 digits",
      });
      return;
    } else if (!newUser?.password || newUser?.password.length < 4) {
      setErrMsg({ ...errMsg, password: "password should be 4 deg and more" });
      return;
    }

    CreateNewUser(newUser).then((ret) => {
      console.log(ret.pass);
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

  function handleShowPass() {
    setShowPass(!showPass);
  }

  return (
    <div className="log-form">
      <div className="login">
        <h1>sign up</h1>
        <form onSubmit={signUp}>
          <div className="field">
            <label>name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                handleInput(e.target.name, e.target.value);
              }}
              autoFocus
              value={newUser?.name || ""}
            />
            <p>{errMsg?.name}</p>
          </div>
          <div className="field">
            <label>phone</label>
            <input
              name="phone"
              onChange={(e) => {
                handleInput(e.target.name, e.target.value);
              }}
              type="number"
              value={newUser?.phone || ""}
            />
            <p>{errMsg?.phone}</p>
          </div>
          <div className="field">
            <label>password</label>
            <div className="password-input">
              <input
                name="password"
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
                type={showPass ? "text" : "password"}
                value={newUser?.password || ""}
              />
              <span onClick={handleShowPass}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <p>{errMsg?.password}</p>
          </div>
          <button type="submit">sub</button>
          <h3>{errMsg?.loading}</h3>
        </form>
      </div>
    </div>
  );
}
