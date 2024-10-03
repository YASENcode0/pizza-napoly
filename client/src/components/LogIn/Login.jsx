import React from "react";
import "./log.css";

export default function Login() {
  return (
    <div className="log-form">
      <div className="login">
        <h1>log in</h1>
        <form>
          <div className="field">
            <label htmlFor="">phone</label>
            <input type="number" />
          </div>
          <div className="field">
            <label htmlFor="">password</label>
            <input type="password" />
          </div>
          <button>sub</button>
        </form>
      </div>
    </div>
  );
}
