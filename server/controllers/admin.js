// const Admin = require("../models/admin");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({
      status: "success",
      message: "users retrieved",
      data: {
        users: users,
      },
    });
  } catch {
    return res.status(500).json({
      status: "fail",
      msg: "Something went wrong",
    });
  }
};

//Get specific user by id
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "No user with that id",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "user retrieved",
      data: {
        user: user,
      },
    });
  } catch {
    return res.status(500).json({
      status: "fail",
      msg: "Something went wrong",
    });
  }
};

exports.updateUser = async (req, res, next) => {
  const { fname, lname, bio, email, password } = req.body;

  const userId = req.params.userId;
  const user = await User.findById(userId);

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

  user
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
