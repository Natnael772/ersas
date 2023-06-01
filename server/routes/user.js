const router = require("express").Router();
const userController = require("../controllers/user");
const verify = require("../middlewares/verify");

router.get("/blogs", userController.getBlogs);

router.get("/blogs/:blogId", userController.getBlog);

router.put("/blogs/:blogId", verify, userController.editBlog);

router.post("/blog", verify, userController.createBlog);

router.post("/blogs/:blogId/comment", verify, userController.postComment);

module.exports = router;
