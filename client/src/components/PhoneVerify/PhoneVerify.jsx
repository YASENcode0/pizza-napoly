import React, { useState } from "react";
import "./PhoneVerify.css";

export default function PhoneVerify() {
  const [number, setNumber] = useState("123456");

  function send() {
    if (number.length !== 10) {
      console.log("number must be 10 deg");

      return;
    } else {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "App 966581b3184b39686cb1b6f4c7b2595d-770cab25-7aa5-4fac-819f-f4430789a34f"
      );
      // myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Accept", "application/json");

      // myHeaders.append("Authorization", "App {{4275ab2b38eadbe0e424d6e099d26fe4-7c153adb-ffb3-40a0-84e9-44dfdbc11580}}");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      console.log(`972${parseInt(number.toString().slice(1))}`);

      const raw = JSON.stringify({
        messages: [
          {
            destinations: [
              { to: `972${parseInt(number.toString().slice(1))}` },
            ],
            from: "napolyPizza",
            text: `Hi your code is ${Math.floor(Math.random())}`,
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://qdegmw.api.infobip.com/sms/2/text/advanced",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="verify">
      <div className="phone-number-box">
        <label>phone number</label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={send}>check</button>
      </div>
    </div>
  );
}
