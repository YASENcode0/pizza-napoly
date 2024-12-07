import React, { useContext, useState } from "react";
import "./PopUp.css";
import Radio from "../Radio/Radio";
import { AddOrder, UseTranslate } from "../PublicStore";
import { words } from "../PublicStore";
import { OrderDetails, language } from "../context/OrderDetails";
import { useNavigate } from "react-router-dom";

export default function PopUp({ onOf, setOnOf, currPizza }) {
  // state
  const [data, setDate] = useState({});
  //context
  // ???
  const { order, setOrder, addOrder } = useContext(OrderDetails);
  const { lang, CahngeLanguage } = useContext(language);
  //var
  const navigate = useNavigate();
  // methods
  function closePopUp() {
    setOnOf(!onOf);
  }
  function handleOrder() {
    const myOrder = {
      note: data?.note,
      corn: data?.corn,
      tuna: data?.tuna,
      mushroom: data?.mushroom,
      tomato: data?.tomato === undefined ? false : true,
      onion: data?.onion === undefined ? false : true,
      olive: data?.olive,
      pizzaType: currPizza?.name,
      price: currPizza?.price,
    };

    AddOrder(myOrder).then((ret) => {
      if (ret.status) {
        closePopUp();
        navigate("/cart");
      } else {
        console.log("err add order!");
      }
    });
  }

  //var
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
    <div
      className={`popup ${!onOf && "popup-hide"}`}
      dir={lang === "ar" && "rtl"}
    >
      <div className="order-title">
        <img alt="pizza" src="" />
        <h2>{currPizza?.name}</h2>
      </div>
      <div className="order-details">{pizzaAdd}</div>
      <textarea
        onChange={(e) => {
          setDate({ ...data, note: e.target.value });
        }}
        value={data.note}
        placeholder={UseTranslate("note...", lang)}
      ></textarea>
      <div className="pop-total">
        <h3>{UseTranslate("total", lang)}</h3>
        <h2>{currPizza?.price}₪</h2>
      </div>
      <div className="order-btns" dir={"ltr"}>
        <button className="cancel" onClick={closePopUp}>
          {UseTranslate("cancel", lang)}
        </button>
        <button className="order" onClick={handleOrder}>
          {UseTranslate("order", lang)}
        </button>
      </div>
    </div>
  );
}
