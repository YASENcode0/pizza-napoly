import React, { useState } from "react";
import "./MyOrders.css";
import pizzaImg from "../../assets/photos/pizza-type1.png";
import { LuCookingPot } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TiCancel } from "react-icons/ti";
import { MdOutlineDone } from "react-icons/md";

export default function MyOrders() {
  console.log(navigator.geolocation.getCurrentPosition(show));
  function show(p) {
    console.log(p);
  }

  const [labelSelect, setLabelSelect] = useState(-1);
  const [orders, setOrders] = useState([
    {
      img: pizzaImg,
      details: "Lorem ipsum dolor sit, amet dolor sit, amet",
      price: 20.9,
      location: "tel sheva",
      status: "ready",
    },
    {
      img: pizzaImg,
      details: "Lorem ipsum dolor sit, amet dolor sit, amet",
      price: 20.9,
      location: "tel sheva",
      status: "working",
    },
    {
      img: pizzaImg,
      details: "Lorem ipsum dolor sit, amet dolor sit, amet",
      price: 20.9,
      location: "tel sheva",
      status: "canceled",
    },
    {
      img: pizzaImg,
      details: "Lorem ipsum dolor sit, amet dolor sit, amet",
      price: 20.9,
      location: "tel sheva",
      status: "expired",
    },
  ]);

  const MyOrders = orders?.map((order, i) => (
    <div
      onClick={() => {
        setLabelSelect((prev) => {
          if (prev === i) return -1;
          return i;
        });
      }}
      className={`order-label ${labelSelect === i && "order-label-full"}`}
      key={i}
    >
      <div className="order-label-top">
        <img src={order.img} alt="pizza" loading="lazy" />
        <p>{order.details}</p>
        <div className={`order-status order-status-${getOrderStatus(i)}`}>
          {getOrderStatusImg(order.status)}
        </div>
      </div>
      <div className="order-label-bottom">
        <div>{order.price} ₪</div>
        <div>
          <FaLocationDot /> Tell aviv
        </div>
      </div>
    </div>
  ));

  function getOrderStatusImg(i) {
    if (i === "ready") {
      return <MdDeliveryDining />;
    } else if (i === "working") {
      return <LuCookingPot />;
    } else if (i === "canceled") {
      return <TiCancel />;
    } else {
      return <MdOutlineDone />;
    }
  }
  function getOrderStatus(i) {
    if (i === 0) {
      return "ready";
    } else if (i === 1) {
      return "working";
    } else if (i === 2) {
      return "canceled";
    } else {
      return "expired";
    }
  }

  return <div className="my-orders">{MyOrders}</div>;
}
