import React, { useState } from "react";
import "./Radio.css";

export default function Radio({ text = "select", defaultVal = true, handle }) {
  const [value, setValue] = useState(defaultVal);

  function changeValue() {
    setValue(!value);
    handle(!value);
  }

  return (
    <div className="radio">
      <h3>{text}</h3>
      <div
        onClick={changeValue}
        className={`${
          value ? "radio-true-choose" : " radio-false-choose"
        } radio-choose`}
      >
        <span></span>
      </div>
    </div>
  );
}
