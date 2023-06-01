const express = require("express");
const app = express();
const User = require("../models/user");
const Blog = require("../models/blog");
const Category = require("../models/category");

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
  const { categoryId, title, content, userId } = req.body;
  // return res.json({ data: req.body });

  const category = await Category.findOne({ _id: categoryId });
  if (!category) {
    return res.status(404).json({ status: "fail", msg: "No such category" });
  }
  // return res.json({ cat: category });

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return res.status(404).json({ status: "fail", msg: "User not found" });
  }

  const blog = new Blog({
    category: categoryId,
    title: title,
    content: content,
    author: userId,
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

exports.editBlog = async (req, res, next) => {
  const { categoryId, title, content, userId } = req.body;
  const blogId = req.params.blogId;

  //Find blog on the database
  const blog = await Blog.findOne({ _id: blogId });
  if (!blog) {
    return res
      .status(404)
      .json({ status: "fail", msg: "No blog with this id" });
  }

  //Find category on the database
  const category = await Category.findOne({ _id: categoryId });
  if (!category) {
    return res.status(404).json({ status: "fail", msg: "No such category" });
  }

  //Find the user sending the request
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res
      .status(404)
      .json({ status: "fail", msg: "No user with this id" });
  }

  //Edit blog
  blog.category = categoryId;
  blog.title = title;
  blog.content = content;
  blog.author = userId;

  //Save blog
  await blog.save(function (err) {
    if (err) {
      return res
        .status(500)
        .json({ status: "fail", msg: "Something went wrong" });
    }

    //Send the response
    res.status(201).json({
      status: "success",
      blog: blog,
    });
  });
};
exports.deletePost = (req, res, next) => {};
