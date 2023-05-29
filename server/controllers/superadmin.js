const express = require("express");
const Admin = require("../models/admin");
const User = require("../models/user");
const Superadmin = require("../models/superadmin");
const bcrypt = require("bcryptjs");

//Login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const superadmin = await Superadmin.find({ email: email });

  //If the user doesn't exist
  if (!superadmin) {
    return res.json({
      status: "fail",
      msg: "Invalid credentials",
    });
  }

  const isAuth = await bcrypt.compare(password, superadmin.password);
  //If the password is incorrect
  if (!isAuth) {
    return res.json({
      status: "fail",
      msg: "Invalid credentials",
    });
  }
};

//Add admin
exports.addAdmin = (req, res, next) => {
  const { fname, lname, email, password, role } = req.body;
};
