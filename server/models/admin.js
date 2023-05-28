const app = require("express")();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  bio: String,
  // links: String,
  links: {
    twitter: String,
    facebook: String,
    linkedin: String,
  },
  // photo: String,
});
module.exports = mongoose.model("Admin", adminSchema);
