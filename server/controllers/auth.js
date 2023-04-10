const express = require("express");
const app = express();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  // const user = await User.find({ email: email });
  const user = {
    id: 1,
    email: email,
    password: password,
  };
  if (!user) {
    return res.json({ msg: "Email or password incorrect" });
  }
  // const isAuth = await bcrypt.compare(password, user.password);
  const isAuth = true;
  if (isAuth) {
    //Generate access token
    const accessToken = jwt.sign({ id: user.id }, "mysecretkey");
    res.json({
      email: user.email,
      accessToken,
    });
  }
};

exports.postSignup = (req, res, next) => {
  const { fname, lname, username, bio, links, confirmPwd, email, password } =
    req.body;

  const user = new User({
    fname: fname,
    lname: lname,
    username: username,
    bio: bio,
    links: links,
    email: email,
    password: password,
  });
  user
    .save()
    .then((result) => {
      console.log("Created");
      res.json({
        status: "success",
        req: req.body,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
