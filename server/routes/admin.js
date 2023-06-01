const app = require("express")();
const router = require("express").Router();
const verify = require("../middlewares/verify");

const adminController = require("../controllers/admin");

router.get("/users", verify, adminController.getUsers);
router.get("/users/:userId", adminController.getUser);

router.put("/users/:userId", adminController.updateUser);

router.delete("/users/:userId", adminController.deleteUser);

router.delete("/dummyusers/:userId", verify, (req, res, next) => {
  if (req.user.id == req.params.userId || req.user.role == "admin") {
    res.status(200).json({
      msg: "user has been deleted",
    });
  } else {
    res.status(403).json({ msg: "You arenot allowed to delete this user" });
  }
});

// dummy tokens
let refreshTokens = [];
const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, "mysecretkey", {
    expiresIn: "20s",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, "myrefreshsecretkey", {
    expiresIn: "20s",
  });
};

router.post("/refresh", (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;
  //send error if no token or invalid
  if (!refreshToken)
    return res.status(401).json({ msg: "You arenot authorized" });
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({
      msg: "refresh token not valid",
    });
  }
  jwt.verify(refreshToken, "myrefreshtoken", (err, user) => {
    refreshTokens = refreshTokens.filter((token) => token != refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });

  //create new access token, refresh token
});
module.exports = router;
