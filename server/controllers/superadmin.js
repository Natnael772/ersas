const express = require("express");
const Admin = require("../models/admin");
const User = require("../models/user");
const Superadmin = require("../models/superadmin");
const bcrypt = require("bcryptjs");

//Login
// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;
//   const superadmin = await Superadmin.find({ email: email });

//   //If the user doesn't exist
//   if (!superadmin) {
//     return res.json({
//       status: "fail",
//       msg: "Invalid credentials",
//     });
//   }

//   const isAuth = await bcrypt.compare(password, superadmin.password);
//   //If the password is incorrect
//   if (!isAuth) {
//     return res.json({
//       status: "fail",
//       msg: "Invalid credentials",
//     });
//   }

//   res.json({
//     status: "success",
//   });
// };

//Add admin
exports.addAdmin = async (req, res, next) => {
  const { fname, lname, email, password } = req.body;

  const hashedPwd = await bcrypt.hash(password, 23);
  const admin = new Admin({
    fname: fname,
    lname: lname,
    email: email,
    password: hashedPwd,
  });
  await admin.save();
  res.json({
    status: "success",
    msg: "Successfully added admin",
    admin: admin,
  });
};

exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.json({
    status: "success",
    users: users,
  });
};
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  //   const user = await User.find({ _id: userId });
  if (!user) {
    return res.json({
      status: "fail",
      msg: "No user with that id",
    });
  }
  res.json({
    status: "success",
    user: user,
  });
};

exports.updateUser = async (req, res, next) => {
  const { fname, lname, email } = req.body;
  const userId = req.params.userId;
  const user = await User.findById(userId);
  user.fname = fname;
  user.lname = lname;
  user.email = email;
  await user.save();
  res.json({ status: "success", user: user });
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndRemove(userId);
  res.json({
    status: "success",
    user: user,
  });
};
