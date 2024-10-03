import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart-box">
      <ItemLabel />
      <ItemLabel />
      <ItemLabel />
    </div>
  );
}

function ItemLabel() {
  return (
    <div className="item-label">
      <h3>item label <span>20 $</span></h3>
      <div className="item-label-btns">
        <button>delete</button>
        <button>pay</button>
      </div>
    </div>
  );
}
