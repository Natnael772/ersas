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

module.exports = router;
