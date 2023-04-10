const app = require("express")();
const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const adminController = require("../controllers/admin");

router.get("/users", adminController.getUsers);
router.get("/users/:userId", adminController.getUser);

router.put("/users/:userId", adminController.updateUser);

router.delete("/users/:userId", adminController.deleteUser);

router.delete("/dummyusers/:userId", isAuth, (req, res, next) => {
  if (req.user.id == req.params.userId) {
    res.status(200).json({
      msg: "user has been deleted",
    });
  }
});
module.exports = router;
