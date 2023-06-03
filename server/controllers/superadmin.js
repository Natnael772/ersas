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
  const { fname, lname, email, bio, password, confirmPassword } = req.body;

  console.log(req.body);

  if (password !== confirmPassword) {
    return res.status(400).json({ status: "fail", msg: "Passwords mismatch" });
  }
  const hashedPwd = await bcrypt.hash(password, 12);
  console.log(hashedPwd);

  const adminExists = await Admin.findOne({ email: email });

  console.log(adminExists);
  if (adminExists) {
    return res.status(409).json({
      status: "fail",
      msg: "Admin exists with this email. Try a different one.",
    });
  }

  const admin = new Admin({
    fname: fname,
    lname: lname,
    email: email,
    bio: bio,
    password: hashedPwd,
  });
  await admin.save(function (err) {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "fail", msg: "Something went wrong" });
    } else {
      return res.status(201).json({
        status: "success",
        msg: "Successfully added admin",
        admin: admin,
      });
    }
  });
};

//Get admins
exports.getAdmins = async (req, res, next) => {
  const admins = await Admin.find();
  if (!admins) {
    return res.json({ status: "fail", msg: "No admin found" });
  }
  res.json({ status: "success", admins: admins });
};

//Search admin by id
exports.getAdmin = async (req, res, next) => {
  const adminId = req.params.adminId;
  console.log(adminId);
  const admin = await Admin.findOne({ _id: adminId });
  if (!admin) {
    return res
      .status(404)
      .json({ status: "fail", msg: "no admin with this id" });
  }
  res.status(200).json({
    status: "success",
    admin: admin,
  });
};

//Update admin
exports.updateAdmin = async (req, res, next) => {
  const id = req.params.id;
  const { fname, lname, email, password } = req.body;
  const admin = await Admin.find({ _id: id });

  if (!admin) {
    return res.json({ status: "fail", msg: "no admin with this email" });
  }

  //Hasing the password
  const hashedPwd = await bcrypt.hash(password, 23);

  //Update data
  admin.fname = fname;
  admin.lname = lname;
  admin.email = email;
  admin.password = hashedPwd;

  await admin.save();
  res.json({
    status: "success",
    msg: "Updated successfully",
  });
};

//Get users/blogggers
exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.json({
    status: "success",
    users: users,
  });
};

//Get specific user/bloggger by id
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

//Update user by id
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

//Delete user by id
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndRemove(userId);
  res.json({
    status: "success",
    user: user,
  });
};
