const Admin = require("../models/admin");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

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
  // const { fname, lname, bio, email, password } = req.body;
  const userId = req.params.userId;
  // const user = await User.find({ _id: userId });
  console.log(user);
  // if (!user) {
  //   return res.json({
  //     status: "fail",
  //     msg: "No user with that id",
  //   });
  // }

  // const hashedPwd = bcrypt.hash(password, 12);

  // user.fname = fname;
  // user.lname = lname;
  // user.email = email;
  // user.bio = bio;
  // user.password = hashedPwd;
  // await user.save();
  // res.json({ status: "success", user: user });
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  console.log(user);

  if (!user) {
    return res.json({ msg: "no user" });
  }
  // await User.deleteOne({ _id: userId }, function (err) {
  //   if (err) {
  //     return res.json({ status: "fail", msg: "unable to delete" });
  //   }
  //   res.json({
  //     status: "success",
  //     msg: "Deleted ",
  //   });
  // });
};
