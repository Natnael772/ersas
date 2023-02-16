const express = require("express");
const app = express();
const User = require("../models/user");

exports.postLogin = (req, res, next) => {
  

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
