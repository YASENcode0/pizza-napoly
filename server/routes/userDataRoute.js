const express = require("express");
const route = express.Router();
//???
route.get("/:id", (req, res) => {
  res.status(201).json({ data: "hgello" });
});

module.exports = route;
