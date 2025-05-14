const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userDataPath = require("./routes/userDataRoute");
const userPath = require("./routes/userRoute");

require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/user/", userPath);
app.use("/user/data/",userDataPath);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});

// mongoose
//   .connect("mongodb://127.0.0.1:27017/pizza-napoly")
//   .then(
//     app.listen(PORT, () => {
//       console.log("listen on port ", PORT);
//     })
//   )
//   .catch((err) => {
//     console.log("err:" + err);
//   });

//   app.post('/register/user',tst(num))

//   function tst(num){
//     console.log(num)
//   }
// console.log(require('crypto').randomBytes(64).toString('hex'))
