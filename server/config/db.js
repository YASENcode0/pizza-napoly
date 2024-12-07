const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("mongo DB connected");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = connectDB;
