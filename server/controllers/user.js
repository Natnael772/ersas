const express = require("express");
const app = express();

const User = require("../models/user");
const Blog = require("../models/blog");
const Category = require("../models/category");
const Comment = require("../models/comment");
const Clap = require("../models/clap");

exports.getBlogs = async (req, res, next) => {
  const blogs = await Blog.find();
  return res.status(200).json({ status: "success", blogs: blogs });
};

exports.getBlog = async (req, res, next) => {
  const blogId = req.params.blogId;

  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    return res.json({
      status: "fail",
      msg: "No blog with this id",
    });
  }

  res.status(200).json({
    status: "success",
    blog: blog,
  });
};

exports.createBlog = async (req, res, next) => {
  const { categoryId, title, content } = req.body;
  const userId = req.user._id;

  const category = await Category.findOne({ _id: categoryId });
  if (!category) {
    return res.status(404).json({ status: "fail", msg: "No such category" });
  }

  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res.status(404).json({ status: "fail", msg: "User not found" });
  }

  const blog = new Blog({
    category: categoryId,
    title: title,
    content: content,
    author: userId,
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
  const { categoryId, title, content } = req.body;
  const userId = req.user._id;
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

exports.postComment = async (req, res, next) => {
  if (!content) {
    const blogId = req.params.blogId;
    const userId = req.user._id;
    const { content } = req.body;

    return res
      .status(400)
      .json({ status: "fail", msg: "Comment can't be empty. Enter comment." });
  }

  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    return res.status(404).json({
      status: "fail",
      msg: "No blog with this id",
    });
  }

  const comment = new Comment({
    content: content,
    blog: blogId,
    user: userId,
  });

  await comment.save(function (err, data) {
    if (err)
      return res
        .status(500)
        .json({ status: "fail", msg: "Something went wrong" });
  });

  await Blog.findByIdAndUpdate(blogId, {
    $push: { comments: comment._id },
  }).exec(function (err, data) {
    if (err) {
      return res.status(500).json({
        status: "fail",
        msg: "Something went wrong",
      });
    }

    return res
      .status(201)
      .json({ status: "success", comment: comment.content });
  });
};

exports.postClap = async (req, res, next) => {
  const blogId = req.params.blogId;
  const userId = req.user._id;

  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    return res.status(404).json({
      status: "fail",
      msg: "No blog with this id",
    });

    // const clapIndex = blog.claps.indexOf(userId);
    // console.log(`Blog index: ${typeof []}`);

    // const userClapped = blogs.claps.filter(user);

    // if (clapIndex !== -1) {
    //   // console.log(`Index: ${clapIndex}`);
    //   // blog.claps.push(userId);
    // } else {
    //   // console.log(`Index: ${clapIndex}`);
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
    res
      .status(201)
      .json({ status: "success", msg: "clap operation successful" });
  }
};
// exports.postFollow = async (req, res, next) => {
//   const userId = req.user._id;
//   const userToFollowId = req.params.userToFollowId;
//   const user = await User.findOne({ _id: userId });

//   const userToFollow = await User.findOne({ _id: userToFollowId });
// };
