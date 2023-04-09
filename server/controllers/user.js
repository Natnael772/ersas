const express = require("express");
const app = express();
const User = require("../models/user");
const Blog = require("../models/blog");

exports.getBlogs = async (req, res, next) => {
  const blogs = await Blog.find();
  res.json({ message: "success", blogs: blogs });
};

exports.getBlog = (req, res, next) => {};

exports.createBlog = async (req, res, next) => {
  const {
    category,
    subcategory,
    title,
    description,
    body,
    posted,
    updated,
    claps,
    comments,
  } = req.body;

  const blog = new Blog({
    category: category,
    subcategory: subcategory,
    title: title,
    description: description,
    body: body,
    // posted: posted,
    // updated: updated,
    claps: claps,
    comments: comments,
  });
  await blog.save();
  res.json({
    status: "success",
    blog: blog,
  });
};

exports.editPost = (req, res, next) => {};
exports.deletePost = (req, res, next) => {};
