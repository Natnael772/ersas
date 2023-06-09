const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema(
  {
    // content: {
    //   type: String,
    //   required: true,
    // },

    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },

    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],

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
