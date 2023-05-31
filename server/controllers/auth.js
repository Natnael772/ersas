const express = require("express");
const app = express();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// const generateAccessToken = (user) => {
//   return jwt.sign({ id: user.id }, "mysecretkey", {
//     expiresIn: "20s",
//   });
// };
// const generateRefreshToken = (user) => {
//   return jwt.sign({ id: user.id }, "myrefreshsecretkey", {
//     expiresIn: "20s",
//   });
// };

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  //check if email and password exists
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      msg: "Please provide email and passwod",
    });
  }

  //check if user exists and password is correct
  const user = await User.findOne({ email: email });
  console.log(user);
  // if (!user) {
  //   return res.status(401).json({
  //     status: "fail",
  //     msg: "Incorrect email or password",
  //   });
  // }

  // const isAuth = await bcrypt.compare(password, user.password);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      msg: "Incorrect email or password",
    });
  }

  //if everything ok, send token to client
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });

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

  const token = signToken(user._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};
