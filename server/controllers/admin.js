const Admin = require("../models/admin");
const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.json({
    status: "success",
    users: users,
  });
};
exports.getUser = (req, res, next) => {};
exports.deleteUsers = (req, res, next) => {};
