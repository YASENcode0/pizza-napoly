import React, { useContext, useState } from "react";
import "./Card.css";
import { UseTranslate, words } from "../PublicStore";
import { Order } from "../context/PopUps";
import pizza from "../../assets/photos/pizza-type1.png";

export default function Card({ data }) {
  const [lang, setLang] = useState("en");
  const { handlePopup } = useContext(Order);

  function handleTranslate(word) {
    return (
      words[
        words.findIndex((w) => {
          return w.w == word;
        })
      ]?.M || word
    );
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={data?.img || pizza} alt="pizza img" />
      </div>
      <h2>{data?.name}</h2>
      <h3>{data?.price}</h3>
      <button onClick={handlePopup}>
        {lang === "en" ? "order" : UseTranslate("order")}
      </button>
    </div>
  );
}
