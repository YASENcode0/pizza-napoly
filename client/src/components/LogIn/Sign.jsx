import React from "react";

export default function Sign() {
  return (
    <div className="log-form">
      <div className="login">
        <h1>log in</h1>
        <form>
          <div className="field">
            <label htmlFor="">name</label>
            <input type="text" />
          </div>
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
