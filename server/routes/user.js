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

module.exports = router;
