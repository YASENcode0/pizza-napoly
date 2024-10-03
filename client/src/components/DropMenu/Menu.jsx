import React, { useContext } from "react";
import "./Menu.css";
import { language } from "../context/OrderDetails";

export default function Menu({ on }) {
  //context
  const { lang, ChangeLanguage } = useContext(language);

  return (
    <div className={`menu ${!on && "menu-hide"}`}>
      <li>Profile</li>
      <li>settings</li>
      <li>dark mode</li>
      <li
        onClick={() => {
          ChangeLanguage(lang === "en" ? "ar" : "en");
        }}
      >
        langue
      </li>
    </div>
  );
}
