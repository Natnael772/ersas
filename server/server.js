const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const User = require("./models/user");
const Blog = require("./models/blog");

require("dotenv").config();

console.log(process.env.PORT);

const DB = process.env.DB;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8080;

app.use(bodyparser.urlencoded());
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1/admin", adminRoutes);

const run = async () => {
  try {
    // const blog = await Blog.where("category").where("subcategory").equals("PC");
    // blog.
    // const user = new User({
    //   fname: "YYY",
    //   lname: "Deyas",
    //   username: "naty",
    //   followers: "63ee147c8df61fd8307cbfa0",
    //   blog: "63ee147c8df61fd8307cbfa0",
    // });

    // user.followers = "63ee147c8df61fd8307cbfa0";
    // user.blog = "63ee147c8df61fd8307cbfa0";
    // await user.save();
    // console.log(user);
    const user = await User.find({ _id: "63eeaf51487a626a700899fa" }).populate(
      "blog",
      "title description"
    );

    // await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

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
