import React, { useState } from "react";
import "./ConfPop.css";

export default function ConfPop({
  title = "message title",
  conformFun,
  onOf,
  onOfFun,
}) {
  function conform() {
    conformFun();
  }
  function cancel() {
    onOfFun(false);
  }

  return (
    <div className="conform-pop-div">
      <div className="conform-pop">
        <h2>{title}</h2>
        <button onClick={cancel}>cancel</button>
        <button onClick={conform}>conform</button>
      </div>
    </div>
  );
}
