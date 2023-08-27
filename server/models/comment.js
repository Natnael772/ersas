const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema(
  {
    authorId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },

    content: {
      type: String,
      required: true,
    },

    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },

    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
    // updatedAt: {
    //   type: Date,
    // },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
