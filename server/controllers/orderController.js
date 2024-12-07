const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

await function orderPizza(req, res, next) {
  const { order } = req.body;
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ msg: "Access denied. No token provided." });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    trs.status(403).json({msg:"invalid token"})
  }
};

module.exports = orderPizza