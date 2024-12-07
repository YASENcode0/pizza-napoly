const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

async function registerUser(req, res) {
  const { name, phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ msg: "user is already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const newUser = new User({
      name,
      phone,
      password: await bcrypt.hash(password, salt),
    });

    await newUser.save();

    const payLoad = { userId: newUser._id };
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server err");
  }
}

module.exports = registerUser;
