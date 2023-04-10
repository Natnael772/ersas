const app = require("express")();
const router = require("express").Router();
const verify = require("../middlewares/verify");

const adminController = require("../controllers/admin");

router.get("/users", adminController.getUsers);
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

let refreshTokens = [];
app.post("/api/refresh", (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;
  //send error if no token or invalid
  if (!refreshToken)
    return res.status(401).json({ msg: "You arenot authorized" });
  //create new access token, refresh token
});
module.exports = router;
