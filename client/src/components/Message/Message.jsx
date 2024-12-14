import React, { useEffect, useState } from "react";
import "./Message.css";
import { IoMdClose } from "react-icons/io";

export default function Message({ content }) {
   const [on, setOn] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setOn(false);
      }, 4000);
   }, []);

   if (on) {
      return (
         <div className={`message-unit ${!on && "hide-message"} `}>
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
