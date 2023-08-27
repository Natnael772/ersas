const router = require("express").Router();

const {
  getBlogs,
  getBlog,
  editBlog,
  createBlog,
  postComment,
  clap,
  followUser,
} = require("../controllers/user");

// const verify = require("../middlewares/verify");

router.get("/blogs", getBlogs);

router.get("/blogs/:blogId", getBlog);

router.put("/blogs/:blogId", editBlog);

router.post("/blog", createBlog);

router.post("/blogs/:blogId/comment", postComment);

router.post("/blogs/:blogId/clap", clap);

module.exports = router;
