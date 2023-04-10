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
    email: "gmail",
    password: 123,
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

const verify = () => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "myecretkey", (err, user) => {
      if (err)
        res.status(401).json({
          msg: "Token isnot valid",
        });

      req.user = user;
      next();
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
