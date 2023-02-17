const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const User = require("./models/user");
const Blog = require("./models/blog");

app.use(bodyparser.urlencoded());
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 8080;

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
  mongoose
    .connect(
      "mongodb+srv://natnael:root@cluster0.gy0a5.mongodb.net/ersasdb?retryWrites=true&w=majority"
    )
    .then((res) => {
      run();
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
