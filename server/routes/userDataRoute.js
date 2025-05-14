const express = require("express");
const route = express.Router();
//???
route.get("/:id", (req, res) => {
  res
    .status(201)
    .json({
      name: "yasen",
      Email: "yasen@exam.com",
      password: 1234,
      phone: 147820,
      location: "israel ,south",
    });
});

module.exports = route;
