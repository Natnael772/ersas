const jwt = require("jsonwebtoken");
//Checking if the user has a valid token
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "mysecretkey", (err, user) => {
      if (err)
        return res.status(401).json({
          msg: "Token isnot valid",
        });

      req.user = user;
      next();
    });
  }
};
