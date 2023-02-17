const app = require("express")();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  category: String,
  subcategory: String,
  title: String,
  description: String,
  body: String,
  posted: Date,
  updated: Date,
  claps: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  comments: [
    {
      text: String,
      type: Schema.Types.ObjectId,
      ref: "User",

      // votes: Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
