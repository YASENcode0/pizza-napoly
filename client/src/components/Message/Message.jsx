import React, { useEffect, useState } from "react";
import "./Message.css";
import { IoMdClose } from "react-icons/io";

export default function Message({ content , type }) {
  const [on, setOn] = useState(true);
  const [close, setClose] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOn(false);
      closeMessage();
    }, 4000);
  }, []);

  function closeMessage() {
    setTimeout(() => {
      setClose(false);
    }, [1000]);
  }

  if (close) {
    return (
      <div className={`message-unit ${!on && "hide-message"} ${type ? "message-note" : 'message-warning'}`}>
        <button
          onClick={() => {
            setOn(false);
          }}
        >
          <IoMdClose />
        </button>
        {content}
        <hr style={{ animationPlayState: `${on && "running"}` }} />
      </div>
    );
  }
}
