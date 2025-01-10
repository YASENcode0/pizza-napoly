import React, { useRef, useState, useContext } from "react";
import "./Payment.css";
import { RiCoupon3Fill } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import chip from "../../assets/photos/chip.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { MessageContext } from "../context/MessageContext";
// fix the slide switch problem

export default function Payment() {
  const [myCards, setMyCards] = useState([
    1,
    4,
    5,
    6,
    <div className="add-card-label">
      <CiCirclePlus />
    </div>,
  ]);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardSelected, setCardSelected] = useState(0);
  const [coupon, setCoupon] = useState("");
  const cardRef = useRef();

  ///contexts
  const { addMessage } = useContext(MessageContext);

  function scrollTo(i) {
    // window.scrollTo(1, 250);
    // console.log(cardRef.current.scrollLeft);
    // const pointer = e.target.offsetLeft;
    // console.log(pointer);
    // cardRef.current.scrollTo(pointer);
    // cardRef.current.scrollLeft = pointer +10;
    // console.log(cardRef.current.scrollLeft);
    // fix the scroll

    // cardRef.current.scrollLeft = 360;
    // console.log(cardRef.current.scrollLeft + 180);
    console.log(i);
    if (i > 0) {
      const pointer = cardRef.current.scrollLeft;
      // console.log(1);
      console.log(pointer);
      cardRef.current.scrollLeft = parseInt(pointer) + 180;
    } else {
      // cardRef.current.scrollLeft = 0;
      // console.log(2);
      const pointer = cardRef.current.scrollLeft;
      cardRef.current.scrollLeft = parseInt(pointer) - 180;
    }
  }
  function nextCard() {
    setCardIndex((index) => {
      if (index === myCards.length - 1) return 0;
      return index + 1;
    });
  }
  function prevCard() {
    setCardIndex((index) => {
      if (index === 0) return myCards.length - 1;
      return index - 1;
    });
  }
  async function checkCoupon() {
    // await axios.post().then((r)=>{
    //   console.log(r)
    // })
    console.log('first')
    if(coupon){
      addMessage('Coupon Code Added',true)
    }else{
      addMessage('Add Coupon Code',1)
    }
  }

  return (
    <div className="payment">
      <h2>Checkout</h2>
      <div className="payment-cards">
        {myCards.map((card, i) => (
          <div
            key={i}
            className="payment-card"
            style={{ translate: `${-200 * cardIndex}%` }}
          >
            {myCards[cardIndex]}
          </div>
        ))}
        <button
          className="payment-cards-button-next"
          onClick={() => {
            nextCard();
          }}
        >
          <FaArrowAltCircleRight />
        </button>
        <button
          className="payment-cards-button-prev"
          onClick={() => {
            prevCard();
          }}
        >
          <FaArrowAltCircleLeft />
        </button>
      </div>

      <div className="payment-dash">
        <div className="coupon-code">
          <input
            type="number"
            name="coupon-code"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => {
              setCoupon(e.target.value);
            }}
          />
          <button onClick={checkCoupon}>
            <RiCoupon3Fill />
          </button>
        </div>
        <div className="payment-count">
          <div className="count-title">
            <h2>
              Total <span>5 items</span>
            </h2>
            <h2>48.0</h2>
          </div>
          <button
            className="pay-button"
            onClick={() => {
              console.log("hi");
            }}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}
