require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/pizza-napoly")
  .then(
    app.listen(PORT, () => {
      console.log("listen on port ", PORT);
    })
  )
  .catch((err) => {
    console.log("err:" + err);
  });

app.port((res, req) => {
  try {
  } catch (err) {
    console.log("err : " + err);
  }
});
