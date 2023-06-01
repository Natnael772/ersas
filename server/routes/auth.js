const router = require("express").Router();
const verify = require("../middlewares/verify");
const authController = require("../controllers/auth");

router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);

module.exports = router;
