const express = require("express");
const router = express.Router();

// ⁡⁢⁢⁢ @desc Get all users
//  @route /user/
//  @method GET @access public⁡
router.get("/", (req, res) => {
  console.log("get user");
  res.status(200).json({ user: "hello im user" });
});


/**
**@desc Get user by id
**@route  /⁡⁢⁢⁢id⁡
**@method  GET
**@access  public
*/
router.get("/:id", (req, res) => {
  console.log(req.params);
  res.status(201).json({ id: req.params.id });
});

module.exports = router;
