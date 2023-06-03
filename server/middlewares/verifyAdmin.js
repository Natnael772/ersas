const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const Admin = require("../models/admin");
module.exports = async (req, res, next) => {
  //1. Getting token and check if it's there

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    console.log("no token");
    return res.status(401).json({
      status: "fail",
      msg: "You arenot authorized ",
    });
  }
  //2. Verify token

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);

  //3 Check if user still exists
  const user = await Admin.findOne({ id: decoded.id });

  if (!user) {
    return res.status(404).json({
      status: "fail",
      msg: "The admin belonging to this token no longer exist",
    });
  }

  //grant access to protected route
  req.user = user;
  next();
};
