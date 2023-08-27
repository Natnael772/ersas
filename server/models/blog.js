const app = require("express")();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    authorId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    // comments: [
    //   {
    //     user: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //       required: true,
    //     },
    //     content: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    // claps: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    //   },
    // ],
    // clapCount: {
    //   type: Number,
    //   default: 0,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
