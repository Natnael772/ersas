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
  // const { email, password } = req.body;
  // console.log(email, password);
  // const user = await User.findOne({ email: email });
  // console.log(user);
  // if (!user) {
  //   return res.json({ status: "fail", msg: "Email or password incorrect" });
  // }
  // res.json({ status: "success", user: user });
  // const isAuth = await bcrypt.compare(password, user.password);
  // if (!isAuth) {
  //   return res.json({ status: "fail", msg: "Invalid credentials" });
  // }
  //Generate access token
  // const accessToken = generateAccessToken(user);
  // //generate refresh token
  // const refreshToken = generateRefreshToken(user);
  // res.json({
  //   email: user.email,
  //   accessToken,
  //   refreshToken,
  // });
};

exports.postSignup = async (req, res, next) => {
  const { fname, lname, email, bio, password, confirmPassword } = req.body;

  console.log(req.body);
  if (password != confirmPassword) {
    return res.json({
      status: "fail",
      msg: "Error! Passwords don't match",
    });
  }

  const hashedPwd = await bcrypt.hash(password, 12);

  const user = await User.create({
    fname: fname,
    lname: lname,
    bio: bio,
    email: email,
    password: hashedPwd,
  });

  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  console.log(token);
  // await user.save();
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};
