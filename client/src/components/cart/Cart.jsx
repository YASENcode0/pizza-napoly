import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { GetOrders, GetUserDetails } from "../PublicStore";
import { MyOrdersList } from "../context/MyOrdersList";
import { CgExtensionAdd } from "react-icons/cg";
import axios from "axios";
import pizzaImg from "../../assets/photos/pizza-type1.png";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [myOrders, setMyOrders] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    GetOrders().then((ret) => {
      setMyOrders(ret);
    });
  }, []);

  const userOrders = myOrders?.map((item, i) => {
    console.log(item);
    return <ItemLabel key={i} item={item} />;
  });
  return (
    <div className="cart-box">
      <h2>Your Cart</h2>
      <div className="cart-orders">{userOrders}</div>
      <div className="cart-button">
        <div className="cart-bottom">
          <h2>total</h2>
          <h1>50</h1>
        </div>
        <button
          onClick={() => {
            navigate("/payment");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

// methods

// delete order
async function deleteOrder(_id) {
  // console.log(_id);
  // try {
  //   await axios.delete(`/delete/order/${_id}`).then((r) => {
  //     console.log(r.status);
  //   });
  // } catch (err) {
  //   console.err(err);
  // }
  console.log("delete order");
}

// chick out
async function chickOutOrder(_id) {
  // try {
  //   await axios.post("", {}).then((r) => {
  //     console.log(r.status);
  //   });
  // } catch (err) {
  //   console.err(err)
  // }
  console.log("go pay");
}

//order component
function ItemLabel({ item }) {
  return (
    <div
      className="item-label"
      onDoubleClick={() => {
        console.log("delete");
      }}
    >
      <div className="label-logo">
        <img src={pizzaImg} alt="pizza" />
      </div>
      <p className="label-title">Lorem ipsum dolor sit, amet dolor sit, amet</p>
      <div className="label-price">
        <h2>12.0</h2>
      </div>
    </div>
  );
}
