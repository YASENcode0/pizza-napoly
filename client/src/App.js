import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/NavBar/Nav";
import PopUp from "./components/PopupSlide/PopUp";
import { Order } from "./components/context/PopUps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Login from "./components/LogIn/Login";
import Sign from "./components/LogIn/Sign";
import { language, OrderDetails } from "./components/context/OrderDetails";

function App() {
  const [onOf, setOnOF] = useState(false);
  const [order, setOrder] = useState({});
  const [lang, setLang] = useState("en");

  function handlePopup() {
    setOnOF(!onOf);
  }
  function ChangeLanguage(value) {
    setLang(value);
  }
  function handleOrder() {}

  return (
    <language.Provider value={{ lang, ChangeLanguage }}>
      <OrderDetails.Provider value={{ order, setOrder }}>
        <Order.Provider value={{ handlePopup }}>
          <Router>
            <div className={`App ${onOf && "App-scroll-of"}`} dir="">
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sing" element={<Sign />} />
              </Routes>
              <PopUp onOf={onOf} setOnOf={setOnOF} />
            </div>
          </Router>
        </Order.Provider>
      </OrderDetails.Provider>
    </language.Provider>
  );
}

export default App;
