const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const User = require("../models/user");
module.exports = async (req, res, next) => {
  //1. Getting token and check if it's there

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
  }

  if (!token) {
    console.log("no token");
    return res.status(401).json({
      status: "fail",
      msg: "You arenot authorized ",
    });
  }
  //2. Verify token
  // console.log(process.env.JWT_SECRET);
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);

  //3 Check if user still exists
  const user = await User.findOne({ _id: decoded.id });
  console.log(user);
  if (!user) {
    return res.status(404).json({
      status: "fail",
      msg: "The user belonging to this token no longer exist",
    });
  }

  //grant access to protected route
  req.user = user;
  next();
};

//Verifying if the user has a valid token
// module.exports = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     res.status(401).json({ msg: "You arenot authenticated" });
//   } else {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err)
//         return res.status(401).json({
//           msg: "Token isnot valid",
//         });

//       req.user = user;
//       next();
//     });
//   }
// };
