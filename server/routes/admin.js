const app = require("express")();
const router = require("express").Router();

const adminController = require("../controllers/admin");

router.get("/users", adminController.getUsers);
router.get("/users/:userId", adminController.getUser);

router.put("/users/:userId", adminController.updateUser);

router.delete("/users/:userId", adminController.deleteUser);
module.exports = router;
