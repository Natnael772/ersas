const express = require("express");
const app = express();
const User = require("../models/user");
const Blog = require("../models/blog");

exports.getBlogs = async (req, res, next) => {
  const blogs = await Blog.find();
  res.json({ message: "success", blogs: blogs });
};

exports.getBlog = async (req, res, next) => {
  const blogId = req.params.blogId;
  const blog = await Blog.findOne({ _id: blogId });
  console.log(blog);

  if (!blog) {
    return res.json({
      status: "fail",
      msg: "No blog with this id",
    });
  }
  res.json({
    status: "success",
    blog: blog,
  });
};

exports.createBlog = async (req, res, next) => {
  const {
    category,
    title,
    content,
    // posted,
    // updated,
    // claps,
    // comments,
  } = req.body;

  const blog = new Blog({
    category: category,

    title: title,
    content: content,

    // posted: posted,
    // updated: updated,
    // claps: 0,
    // comments: 0,
  });
  await blog.save(function (err) {
    if (err) {
      return res
        .status(500)
        .json({ status: "fail", msg: "Something went wrong" });
    }

    res.status(201).json({
      status: "success",
      blog: blog,
    });
  });
};

exports.editPost = (req, res, next) => {};
exports.deletePost = (req, res, next) => {};
