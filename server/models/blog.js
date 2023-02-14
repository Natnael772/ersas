const app = require("express")();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  category: String,
  subcategory: String,
  title: String,
  description: String,
  posted: Date,
  updated: Date,
  claps: {
    number: Number,
    clappers: {
      name: String,
    },
    comments: {
      number: Number,
      commenters: {
        name: String,
      },
    },
  },
});

module.exports = mongoose.model("Blog", blogSchema);
