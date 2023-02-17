const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/blogs", userController.getBlogs);

router.post("/blog", userController.createBlog);

module.exports = router;
