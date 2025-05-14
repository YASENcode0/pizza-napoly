import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { GetOrders, GetUserData } from "../PublicStore";
import { MyOrdersList } from "../context/MyOrdersList";
import { CgExtensionAdd } from "react-icons/cg";
import axios from "axios";
import pizzaImg from "../../assets/photos/pizza-type1.png";
import { useNavigate } from "react-router-dom";

import { OrderDetails } from "../context/OrderDetails";

export default function Cart() {
  const [on, setOn] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const { allOrders } = useContext(OrderDetails);
  console.log(allOrders);

  useEffect(() => {
    setTotal(() => allOrders.reduce((total, card) => total + card?.price, 0));

    GetOrders().then((ret) => {
      setMyOrders(ret);
    });
  }, []);

  // switch the on of to enable the radio in items
  function selectSwitch() {
    setOn(!on);
  }

  console.log(selected);

  function addSelectItem(item) {
    setSelected((pre) => {
      if (pre.some((pizza) => pizza === item)) {
        return pre.filter((i) => {
          return i != item;
        });
      } else {
        return [...selected, item];
      }
    });
  }

  const userOrders = allOrders?.map((item, i) => {
    return (
      <ItemLabel
        index={i}
        key={i}
        is={selectAll}
        item={item}
        on={on}
        addItemFun={addSelectItem}
      />
    );
  });

  return (
    <div className="cart-box">
      <h2>Your Cart</h2>
      <div>
        <button onClick={selectSwitch}>select</button>
        <label>select all</label>
        <input
          type="radio"
          checked={selectAll}
          onClick={() => {
            setSelectAll(!selectAll);
            console.log(selectAll);
            setSelected(!selectAll ? myOrders : []);
          }}
        />
      </div>
      <div className="cart-orders">{userOrders}</div>
      <div className="cart-button">
        <div className="cart-bottom">
          <h2>total</h2>
          <h1>{total}</h1>
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
function ItemLabel({ index, item, on, addItemFun, key, is }) {
  const [chick, setChick] = useState(false);

  function changeChick() {
    setChick(!chick);
    addItemFun(item);
  }

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
      <p className="label-title">{item?.type}</p>
      <p className="label-title">{item?.note || ""}</p>
      <div className="label-price">
        <h2>{item?.price} ₪</h2>
      </div>
      {on && <input type="radio" onClick={changeChick} checked={is || chick} />}
    </div>
  );
}
