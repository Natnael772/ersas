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

require("dotenv").config();

console.log(process.env.PORT);

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080;
const DB = process.env.DB;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

app.use(bodyparser.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/superadmin", superadminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(DB, PASSWORD, USER);
  mongoose
    .connect(MONGODB_URL)
    .then((res) => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
