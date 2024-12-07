import { lang } from "../App";
import axios from "axios";

export const words = [
  { W: "corn", M: "ذرة" },
  { W: "tuna", M: "تونة" },
  { W: "mushroom", M: "فطر" },
  { W: "tomato", M: "بندورة" },
  { W: "onion", M: "بصل" },
  { W: "olive", M: "زيتون" },
  { W: "note...", M: "ملاحضة ..." },
  { W: "order", M: "اطلب" },
  { W: "cancel", M: "الغاء" },
  { W: "total", M: "المجموع" },
  { W: "sign up", M: "انشاء حساب" },
  { W: "log in", M: "تسجيل دخول" },
  { W: "log out", M: "تسجيل خروج" },
];

export function UseTranslate(word) {
  if (lang === "en") return word;

  return (
    words.find((i) => {
      return i.W === word;
    })?.M || word
  );
}

export function GetUserDetails() {
  return {
    name: "yasen",
    phone: 8974278,
    cart: [{ name: "large pizza", price: 60 }],
  };
}

export async function GetOrders() {
  try {
    return [
      { name: "large pizza", price: 60 },
      { name: "large pizza", price: 60 },
      { name: "large pizza", price: 60 },
      { name: "large pizza", price: 60 },
      
    ];
  } catch (err) {
    console.log(err);
  }
}

export async function AddOrder(order) {
  try {
    await axios.post("").then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log("err add order");
  }
  console.log(order);
  return { msg: "order added", status: true };
}

// add the order to local storage & save on the data base
export function HandleUserOrders(order, userId) {
  localStorage.setItem("user-orders", addOrderToLocalStorage(order));
}

export async function CreateNewUser(userData) {
  try {
    // await axios.post("", userData).then((res) => {
    //   console.log(res);
    // });
    console.log(userData);
  } catch (err) {
    console.log(err);
  }

  return { pass: true };
}

export async function LogIn(userData) {
  try {
    // await axios.post("", userData).then((res) => {
    //   console.log(res);
    // });
    console.log(userData);
  } catch (err) {
    console.log(err);
  }

  return { pass: true };
}

function addOrderToLocalStorage(order) {
  return JSON.stringify("hello");
}
