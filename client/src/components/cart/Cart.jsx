import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { GetOrders, GetUserDetails } from "../PublicStore";
import { MyOrdersList } from "../context/MyOrdersList";
import { CgExtensionAdd } from "react-icons/cg";
import axios from "axios";
import pizzaImg from "../../assets/photos/pizza-type1.png";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [on, setOn] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetOrders().then((ret) => {
      setMyOrders(ret);
    });
  }, []);

  // switch the on of to enable the radio in items
  function selectSwitch() {
    setOn(!on);
  }

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

  const userOrders = myOrders?.map((item, i) => {
    return <ItemLabel key={i} is={selectAll}  item={item} on={on} addItemFun={addSelectItem} />;
  });

  return (
    <div className="cart-box">
      <h2>Your Cart</h2>
      <div>
        <button onClick={selectSwitch}>select</button>
        <label>select all</label>
        <input type="radio" checked={selectAll} onClick={()=>{setSelectAll(!selectAll)
        console.log(selectAll)
          setSelected(!selectAll ? myOrders : [])
        }}/>
      </div>
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
function ItemLabel({ item, on, addItemFun, key , is}) {
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
      <p className="label-title">Lorem ipsum dolor sit, amet dolor sit, amet</p>
      <div className="label-price">
        <h2>12.0</h2>
      </div>
      {on && <input type="radio" onClick={changeChick} checked={is || chick} />}
    </div>
  );
}
