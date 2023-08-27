//User controller

const express = require("express");
const app = express();

const User = require("../models/user");
const Blog = require("../models/blog");
const Category = require("../models/category");
const Comment = require("../models/comment");
const Clap = require("../models/clap");
const Follower = require("../models/follower");
const Following = require("../models/following");

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.findAll();
    if (!blogs) {
      return res.status(404).json({
        status: "fail",
        message: "no blog found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "blogs retrieved",
      data: {
        blogs: blogs,
      },
    });
  } catch {
    return res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
  }
};

//get Specific blog by id
exports.getBlog = async (req, res, next) => {
  const blogId = req.params.blogId;

  try {
    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) {
      return res.status(404).json({
        status: "fail",
        msg: "No blog with this id",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "blog retrieved",
      data: {
        blog: blog,
      },
    });
  } catch {
    return res.status(500)({
      status: "fail",
      message: "something went wrong",
    });
  }
};

exports.createBlog = async (req, res, next) => {
  const { categoryId, title, content } = req.body;
  const userId = req.user._id;
  try {
    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      return res
        .status(404)
        .json({ status: "fail", message: "No such category" });
    }

    const blog = new Blog({
      categoryId: categoryId,
      title: title,
      content: content,
      author: userId,
    });

    await blog.save();

    return res.status(201).json({
      status: "success",
      message: "blog created",
      data: {
        blog: blog,
      },
    });
  } catch {
    return res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
  }
};

exports.editBlog = async (req, res, next) => {
  const blogId = req.params.blogId;
  const userId = req.user._id;
  const { categoryId, title, content } = req.body;

  try {
    //Find blog on the database
    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) {
      return res
        .status(404)
        .json({ status: "fail", message: "No blog with this id" });
    }

    //Find category on the database
    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      return res
        .status(404)
        .json({ status: "fail", message: "No such category" });
    }

    //Edit blog
    blog.categoryId = categoryId;
    blog.title = title;
    blog.content = content;

    //Save blog
    await blog.save();

    //Send the response
    return res.status(201).json({
      status: "success",
      data: {
        blog: blog,
      },
    });
  } catch {
    return res
      .status(500)
      .json({ status: "fail", msg: "Something went wrong" });
  }
};
exports.deletePost = (req, res, next) => {};

exports.postComment = async (req, res, next) => {
  const blogId = req.params.blogId;
  const userId = req.user._id;
  const { content } = req.body;
  // console.log(req.user);
  // console.log(req.user._id);

  if (!content) {
    return res.status(400).json({
      status: "fail",
      msg: "Comment can't be empty. Enter comment.",
    });
  }

  try {
    const blog = await Blog.findOne({ _id: blogId });
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        msg: "No blog with this id",
      });
    }

    const comment = await Comment.create({
      authorId: authorId,
      blogId: blogId,
      content: content,
    });

    return res.status(201).json({
      status: "success",
      message: "commented on blog",
      data: {
        comment: commment,
      },
    });
  } catch {
    return res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
  }
};

exports.clap = async (req, res, next) => {
  const blogId = req.params.blogId;
  const userId = req.user._id;

  try {
    const blog = await Blog.findOne({ _id: blogId });
    console.log(blog);

    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "No blog with this id",
      });
    }

    //check if user previously clapped or not
    const userClapped = await Clap.findOne({ userId: userId, blogId: blogId });
    console.log(userClapped);

    //if he previously clapped, remove the clap
    if (userClapped) {
      await userClapped.remove();
      return res.status(201).json({
        status: "success",
        message: "you removed clap from the blog",
      });
    }

    //if he hasn't clapped before, clap and store it
    const clap = await Clap.create({
      userId: userId,
      blogId: blogId,
    });

    return res.status(201).json({
      status: "success",
      message: "clapped on the blog successfully",
    });
  } catch {}
  return res.status(500).json({
    status: "fail",
    message: "something went wrong",
  });
};

// exports.postFollow = async (req, res, next) => {
//   const userId = req.user._id;
//   const userToFollowId = req.params.userToFollowId;
//   const user = await User.findOne({ _id: userId });

//   const userToFollow = await User.findOne({ _id: userToFollowId });
// };
