const Admin = require("../models/admin");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getUsers = async (req, res, next) => {
  console.log(req.headers);
  const users = await User.find();
  res.status(200).json({
    status: "success",
    users: users,
  });
};
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  //   const user = await User.find({ _id: userId });
  console.log(user);
  if (!user) {
    return res.status(404).json({
      status: "fail",
      msg: "No user with that id",
    });
  }
  res.status(200).json({
    status: "success",
    user: user,
  });
};

exports.updateUser = async (req, res, next) => {
  const { fname, lname, bio, email, password } = req.body;
  const userId = req.params.userId;
  const user = await User.findById(userId);
  console.log(user);
  // res.json({ user: user });

  if (!user) {
    return res.status(404).json({
      status: "fail",
      msg: "No user with that id",
    });
  }

  const hashedPwd = await bcrypt.hash(password, 12);
  user.fname = fname;
  user.lname = lname;
  user.email = email;
  user.bio = bio;
  user.password = hashedPwd;
  await user
    .save()
    .then(() => {
      res.status(201).json({ status: "success", user: user });
    })
    .catch((err) => {
      res.status(401).json({ status: "fail", msg: err });
    });
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  console.log(userId);
  // const user = await User.findOne({ id: userId });
  // // console.log(user);

  // if (!user) {
  //   return res.status(404).json({
  //     status: "fail",
  //     msg: "no user with this id",
  //   });

  // res.status(201).json({ status: "success" });
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res.status(404).json({
      status: "fail",
      msg: "No user with this id",
    });
  }

  User.deleteOne({ _id: userId })
    .then((msg) => {
      return res.status(200).json({ status: "success", msg: "Deleted user" });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ status: "fail", msg: "Something went wrong" });
    });
};
