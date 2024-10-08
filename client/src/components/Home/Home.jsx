import React, { useState } from "react";
import "./Home.css";
import Card from "../card/Card";
import pizzaImg from "../../assets/photos/pizza.png";

export default function Home() {
  const type2 = [
    { img: "", name: "pizza abc", price: 25 },
    { img: "", name: "pizza abc", price: 60 },
  ];
  const type1 = [
    { img: "", name: "pizza large", price: 30 },
    { img: "", name: "pizza small", price: 65 },
  ];

  const PizzaTypes = type1.map((card) => {
    return <Card data={card} />;
  });
  const SambosaTypes = type2.map((card) => {
    return <Card data={card} />;
  });

  return (
    <div className="home">
      <div className="box1">
        <img src={pizzaImg} alt="pizza" />
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div className="news">
        <Sale />
      </div>

      <div className="box2">
        <div className="type1">{PizzaTypes}</div>
        <div className="type2">{SambosaTypes}</div>
      </div>
      <div className="box3"></div>
    </div>
  );
}

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
