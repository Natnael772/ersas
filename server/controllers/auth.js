const express = require("express");
const app = express();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (!user) {
    return res.json({ msg: "Username or password incorrect" });
  }
  const isAuth = await bcrypt.compare(password, user.password);
  if (isAuth) {
    res.json({
      msg: "You have successfully logged in",
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
