module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "myecretkey", (err, user) => {
      if (err)
        res.status(401).json({
          msg: "Token isnot valid",
        });

      req.user = user;
      next();
    });
  }
};
