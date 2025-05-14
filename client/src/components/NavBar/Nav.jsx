import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";

export default function Nav({ handleMenuPop , myOrders}) {
  // const [menu, setMenu] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const pathName = window.location.pathname;
  const navPathNames = ["/my-orders", "/"];

  const [cartItemCount,setCartItemCount] = useState(0)
  useEffect(()=>{
    setCartItemCount(myOrders.length)
  },[])

  useEffect(() => {
    console.log(pathName);
    if (pathName === "/") {
      setSelect(0);
    } else if (pathName === "/ads") {
      setSelect(1);
    } else if (pathName === "/my-orders") {
      setSelect(2);
    } else {
      setSelect(-1);
    }
  }, [pathName]);

  function hideNavStack() {
    for (let path of navPathNames) {
      if (pathName === path) return false;
    }
    return true;
  }

  return (
    <div className="nav-bar">
      <div className="nav-box1">
        <button className="nav-mnu" onClick={handleMenuPop}>
          <RiMenu2Line />
        </button>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          PizzaNapoly
        </div>
        <button
          className="nav-cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <TbShoppingBag />
          <div className="nav-cart-notification">{cartItemCount}</div>
        </button>
      </div>
      {
        <div className={`nav-box2 ${hideNavStack() && "hide-box2"}`}>
          <button
            className={select === 0 && "nav-button-selected"}
            onClick={() => {
              setSelect(0);
              navigate("/");
            }}
          >
            Pizza
          </button>
          <button
            className={select === 1 && "nav-button-selected"}
            onClick={() => {
              setSelect(1);
            }}
          >
            Ads
          </button>
          <button
            className={select === 2 && "nav-button-selected"}
            onClick={() => {
              setSelect(2);
              navigate("/my-orders");
            }}
          >
            My Orders
          </button>
        </div>
      }
    </div>
  );
}
