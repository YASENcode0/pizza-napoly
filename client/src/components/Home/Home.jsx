import React, { useState } from "react";
import "./Home.css";
import Card from "../card/Card";
import pizzaImg from "../../assets/photos/pizza.png";
import pizzaIcon from "../../assets/photos/pizza-icon.png";

export default function Home({ currPizza, setCurrPizza }) {
  //methods
  function addOrderToCurrOrder(card) {
    console.log(card);
    setCurrPizza(card);
  }
  //var

  const type2 = [
    { img: "", name: "pizza abc", price: 25 },
    { img: "", name: "pizza abc", price: 60 },
  ];
  const type1 = [
    { img: "", name: "pizza large", price: 30 },
    { img: "", name: "pizza small", price: 65 },
  ];

  const PizzaTypes = type1.map((card, i) => {
    return (
      <div
        key={i}
        onClick={() => {
          addOrderToCurrOrder(card);
        }}
      >
        <Card data={card} />
      </div>
    );
  });
  const SambosaTypes = type2.map((card, i) => {
    return <Card data={card} key={i} />;
  });

  return (
    <div className="home">
      <h1 className="home-title">Popular pizza</h1>
      <div className="box2">
        <div className="type1">{PizzaTypes}</div>
        <div className="type2">{SambosaTypes}</div>
      </div>
      <div className="box3"></div>
    </div>
  );
}

//components
function Sale() {
  return (
    <div className="sale">
      <h3>SALE</h3>
      <h2>big pizza with cola</h2>
      <div className="price">
        <h1>50 ₪ </h1>
        <h2>65 ₪ </h2>
      </div>
    </div>
  );
}

function Order({ pizzaName }) {
  return (
    <div className="orders">
      <h2>
        <img src={pizzaIcon} alt="pizza" />
        <span>{pizzaName}</span>
      </h2>
      <h3>state</h3>
    </div>
  );
}
