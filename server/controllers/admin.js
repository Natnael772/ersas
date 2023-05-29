const Admin = require("../models/admin");
const User = require("../models/user");

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
  const { fname, lname, bio, email } = req.body;
  const userId = req.params.userId;
  const user = await User.findById(userId);
  if (!user) {
    return res.json({
      status: "fail",
      msg: "No user with that id",
    });
  }
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
