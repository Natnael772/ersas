const jwt = require("jsonwebtoken");
//Verifying if the user has a valid token
module.exports = (req, res, next) => {
  const authHeader = regit q.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ msg: "You arenot authenticated" });
  } else {
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
