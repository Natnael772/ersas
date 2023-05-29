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
  const blog = await Blog.findById(blogId);
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
    description,
    body,
    // posted,
    // updated,
    // claps,
    // comments,
  } = req.body;

  const blog = new Blog({
    category: category,

    title: title,
    description: description,
    body: body,
    // posted: posted,
    // updated: updated,
    // claps: claps,
    // comments: comments,
  });
  await blog.save();
  res.json({
    status: "success",
    blog: blog,
  });
};

exports.editPost = (req, res, next) => {};
exports.deletePost = (req, res, next) => {};
