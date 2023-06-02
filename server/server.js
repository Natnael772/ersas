const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const superadminRoutes = require("./routes/superadmin");

const User = require("./models/user");
const Blog = require("./models/blog");
const Category = require("./models/category");
const superadmin = require("./models/superadmin");

require("dotenv").config();

console.log(process.env.PORT);

const DB = process.env.DB;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8080;

app.use(bodyparser.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/superadmin", superadminRoutes);

//catch unmatched routes
//error handling middleware
app.use(function (error, req, res, next) {
  res.status(500);
  res.json({
    status: "fail",
    error: {
      message: "Something went wrong.",
    },
  });
});

app.listen(PORT, () => {
  console.log("Server running");
  console.log(DB, PASSWORD, USER);
  mongoose
    .connect(
      `mongodb+srv://${USER}:${PASSWORD}@cluster0.gy0a5.mongodb.net/${DB}?retryWrites=true&w=majority`
    )
    .then((res) => {
      console.log("Connected");

      // run();
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
