const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/blogs", userController.getBlogs);

router.get("/blogs/:blogId", userController.getBlog);

// router.put("/blogs/:blogId", userController.editPost);

router.post("/blog", userController.createBlog);

module.exports = router;
