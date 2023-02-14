const app = require("express")();
const router = require("express").Router();

const adminController = require("../controllers/admin");

router.get("/users", adminController.getUsers);
module.exports = router;
