import React from "react";
import "./Settings.css";

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

  console.log(navigator.geolocation.getCurrentPosition(abc));
  function abc(a) {
    console.log(a);
  }

  const lat = 32.0852999; // استبدلها بإحداثيات الطول
  const lng = 34.7817676; // استبدلها بإحداثيات العرض

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${"AIzaSyCAJHj5jc1qOEDttWbl8UPu0Ixx63MXKKA"}`
  )
    .then((response) => response.json())
    .then((data) => {
     console.log(data)
    })
    .catch((error) => console.error("خطأ:", error));

  return (
    <div className="settings">
      <div className="settings-box1">
        <img
          src="https://randomuser.me/api/portraits/men/21.jpg"
          alt="profile"
        />
        <div className="settings-inputs">
          <div className="phone-input">
            <input type="number" name="phone" value={123456} />
          </div>
          <div className="location-input">
            <input type="text" name="location" value={""} />
          </div>
        </div>
      </div>
      <div className="settings-box2">
        <select name="language">
          <option value="AR">arabic</option>
          <option value="EN">english</option>
          <option value="HR">hebrew</option>
        </select>
        <div>light</div>
      </div>
    </div>
  );
}
