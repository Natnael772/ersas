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
  res.json({
    status: "success",
    user: user,
  });
};
exports.deleteUsers = (req, res, next) => {};
