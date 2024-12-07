import React, { useContext, useState } from "react";
import "./Card.css";
import { UseTranslate, words } from "../PublicStore";
import { Order } from "../context/PopUps";
import pizza from "../../assets/photos/pizza-type1.png";
import { TbShoppingBagPlus } from "react-icons/tb";

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
      <div className="card-title">
        <h3>{data?.name}</h3>
        <p>Lorem ipsum dolor sit amet sit amet </p>
      </div>
      <div className="card-buttons">
        <h1>{data?.price} ₪</h1>
        <button onClick={handlePopup}>
          <TbShoppingBagPlus />
        </button>
      </div>
    </div>
  );
}
