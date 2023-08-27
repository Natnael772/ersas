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
exports.postClap = async (req, res, next) => {
  const blogId = req.params.blogId;
  const userId = req.user._id;

  const blog = await Blog.findOne({ _id: blogId });
  console.log(blog);

  if (!blog) {
    return res.status(404).json({
      status: "fail",
      msg: "No blog with this id",
    });
  }
  const userClapped = await blog.claps.findOne({ _id: userId });
  console.log(userClapped);

  Claps.findOne({ _id: userId });

  // const clapIndex = blog.claps.indexOf(userId);
  // console.log(`Blog index: ${clapIndex}`);

  // const userClapped = blogs.claps.filter(user);

  // if (clapIndex !== -1) {
  //   console.log(`Index: ${clapIndex}`);
  //   blog.claps.push(userId);
  // } else {
  //   console.log(`Index: ${clapIndex}`);
  //   blog.claps.splice(clapIndex, 1);
  //   // blog.claps.push(userId);
  // }

  // let clapped, handleClap;
  // const clapIndex = blog.claps.indexOf(userId);
  // if (clapIndex === -1) {
  //   clapped = false;
  //   handleClap = { $push: blog.claps.userId };
  //   const clap = new Clap({
  //     user: userId,
  //     blog: blogId,
  //   });
  //   clap.save().then(() => {
  //     blog
  //       .findByIdAndUpdate(blogId, { $push: blog.claps.userId })
  //       .then((data) => {
  //         return res
  //           .status(201)
  //           .json({ status: "success", msg: "clapped", data: data })
  //           .catch((err) =>
  //             res
  //               .status(500)
  //               .json({ status: "fail", msg: "Something went wrong" })
  //           );
  //       });
  //   });
  // } else {
  //   clapped = true;
  //   console.log(`clapped ${clapped}`);
  //   handleClap = {
  //     $pull: blog.claps.userId,
  //   };
  //   Clap.deleteOne({ user: userId })
  //     .then(() => {
  //       blog.findByIdAndUpdate(blogId, handleClap).then((data) => {
  //         return res
  //           .status(201)
  //           .json({ status: "success", msg: "unclapped", data: data })
  //           .catch((err) =>
  //             res
  //               .status(500)
  //               .json({ status: "fail", msg: "Something went wrong" })
  //           );
  //       });
  //     })
  //     .catch((err) => {
  //       return res.status(500).json({ status: "fail" });
  //     });
  // }

  // console.log(clapped);
  // await blog.findByIdAndUpdate(blogId, handleClap);

  // const clap = new Clap({
  //   user: userId,
  //   blog: blogId,
  // });
  // await clap
  //   .save()
  //   .then((data) => res.json(data))
  //   .catch((err) => res.json({ status: "fail" }));

  // await blog
  //   .save()
  //   .then((data) => res.json(data))
  //   .catch((err) => res.json({ status: "fail" }));

  // await blog.save(function (err, data) {
  //   if (err) {
  //     return res
  //       .status(500)
  //       .json({ status: "fail", msg: "Something went wrong" });
  //   }
  //   return res
  //     .status(201)
  //     .json({ status: "success", msg: "Done successfully" });
  // });
  res.status(201).json({ status: "success", msg: "clap operation successful" });
};

// exports.postFollow = async (req, res, next) => {
//   const userId = req.user._id;
//   const userToFollowId = req.params.userToFollowId;
//   const user = await User.findOne({ _id: userId });

//   const userToFollow = await User.findOne({ _id: userToFollowId });
// };
