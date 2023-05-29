const express = require("express");
const app = express();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, "mysecretkey", {
    expiresIn: "20s",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, "myrefreshsecretkey", {
    expiresIn: "20s",
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });

  if (!user) {
    return res.json({ status: "fail", msg: "Email or password incorrect" });
  }

  const isAuth = await bcrypt.compare(password, user.password);
  if (isAuth) {
    //Generate access token
    const accessToken = generateAccessToken(user);
    //generate refresh token
    const refreshToken = generateRefreshToken(user);

    res.json({
      email: user.email,
      accessToken,
      refreshToken,
    });
  }
};

exports.postSignup = (req, res, next) => {
  const { fname, lname, email, password, bio, confirmPassword } = req.body;

  const user = new User({
    fname: fname,
    lname: lname,

    bio: bio,

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
