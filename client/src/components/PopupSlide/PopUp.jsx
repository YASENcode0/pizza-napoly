import React, { useContext, useState } from "react";
import "./PopUp.css";
import Radio from "../Radio/Radio";
import { UseTranslate } from "../PublicStore";
import { words } from "../PublicStore";
import { OrderDetails, language } from "../context/OrderDetails";

export default function PopUp({ onOf, setOnOf }) {
  // state
  const [data, setDate] = useState({});
  //context
  const { order, setOrder } = useContext(OrderDetails);
  const { lang, CahngeLanguage } = useContext(language);
  // methods
  function closePopUp() {
    setOnOf(!onOf);
  }

  const pizzaAdd = words.slice(0, 6).map((word, i) => {
    return (
      <Radio
        key={i}
        text={UseTranslate(word.W, lang)}
        handle={(value) => {
          setDate({ ...data, [word.W]: value });
        }}
        defaultVal={word.W === "onion" || word.W === "tomato" ? false : true}
      />
    );
  });

  return (
    <div className={`popup ${!onOf && "popup-hide"}`}>
      <div className="order-title">
        <img alt="pizza" src="" />
        <h2>pizza</h2>
      </div>
      <div className="order-details" dir={lang === "ar" && "rtl"}>
        {pizzaAdd}
      </div>
      <textarea
        onChange={(e) => {
          setDate({ ...data, note: e.target.value });
        }}
        value={data.note}
        dir={lang === "ar" && "rtl"}
        placeholder={UseTranslate("note...", lang)}
      ></textarea>
      <h3>
        total <span>5</span>₪
      </h3>
      <div className="order-btns">
        <button className="cancel" onClick={closePopUp}>
          {UseTranslate("cancel", lang)}
        </button>
        <button className="order">{UseTranslate("order", lang)}</button>
      </div>
    </div>
  );
}
