import { useEffect, useState } from "react";
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
import Footer from "./components/Footer/Footer";
import NavStack from "./components/NavStack/NavStack";
import Profile from "./components/profile/Profile";
import { MyOrdersList } from "./components/context/MyOrdersList";
import { HandleUserOrders } from "./components/PublicStore";
import { Decryption } from "./components/PublicStore";
import { IoIosArrowBack } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import Payment from "./components/Payment/Payment";
import MyOrders from "./components/MyOrders/MyOrders";
import Settings from "./components/Settings/Settings";

// import Inter from "./components/InterFaace/inter";

export const lang = "ar";

function App() {
  // add order popup
  const [onOf, setOnOF] = useState(false);
  // curr order
  const [order, setOrder] = useState({});
  const [lang, setLang] = useState("ar");
  const [page, setPage] = useState("home");
  const [currPizza, setCurrPizza] = useState({});
  const [myOrders, setMyOrders] = useState([]);
  //
  const [menuPop, setMenuPop] = useState(false);

  // console.log(
  // text location
  //   navigator.geolocation.getCurrentPosition(geo, (err) => {
  //     console.log(err);
  //   })
  // );

  // useEffect(() => {
  // }, []);

  useEffect(() => {}, []);

  // handleTxt()
  function handlePopup() {
    setOnOF(!onOf);
  }
  function handleMenuPop() {
    setMenuPop(!menuPop);
    console.log(menuPop);
  }
  function ChangeLanguage(value) {
    setLang(value);
  }
  function addOrder(currOrder) {
    console.log(currOrder);
    setMyOrders([...myOrders, currOrder]);
    HandleUserOrders(currOrder);
  }

  return (
    <MyOrdersList.Provider value={{ currPizza, setCurrPizza }}>
      <language.Provider value={{ lang, ChangeLanguage }}>
        <OrderDetails.Provider value={{ order, setOrder, addOrder }}>
          <Order.Provider value={{ handlePopup }}>
            <Router>
              <div className="side-menu">
                <div className="menu-title">
                  <div className="menu-my-info">
                    <img
                      src="https://randomuser.me/api/portraits/men/21.jpg"
                      alt="my-photo"
                    />
                    <div className="menu-my-mane">
                      <h3>Miguel Peck</h3>
                      <p>i love pizza</p>
                    </div>
                  </div>
                  <button onClick={handleMenuPop}>
                    <IoIosArrowBack />
                  </button>
                </div>
                <div className="menu-buttons">
                  <ul>
                    <li
                      onClick={() => {
                        handleMenuPop();
                        window.location = "/";
                      }}
                    >
                      <HiShoppingCart />
                      Shop
                    </li>
                    <li>
                      <FaHeart />
                      Favorites
                    </li>
                    <li>
                      <FaBagShopping />
                      Cart
                    </li>
                    <li
                      onClick={() => {
                        handleMenuPop();
                        window.location = "/settings";
                      }}
                    >
                      <IoIosSettings />
                      Settings
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`App ${onOf && "App-scroll-of"} ${
                  menuPop && "open-side-menu"
                }`}
                dir=""
              >
                <Nav handleMenuPop={handleMenuPop} />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home currPizza={currPizza} setCurrPizza={setCurrPizza} />
                    }
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Sign />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/my-orders" element={<MyOrders />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
                <PopUp
                  onOf={onOf}
                  setOnOf={setOnOF}
                  currPizza={currPizza}
                  setCurrPizza={setCurrPizza}
                />
                {/* <NavStack /> */}
                {/* <Footer /> */}
              </div>
            </Router>
          </Order.Provider>
        </OrderDetails.Provider>
      </language.Provider>
    </MyOrdersList.Provider>
  );
}

export default App;
