const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: String,
  links: {
    twitter: String,
    facebook: String,
    linkedin: String,
  },
  photo: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);

// - id
// - First Name
// - Last Name
// - Username
// - Bio
// - Links {Twitter , Linkedin, Github, Facebook, Telegram}
// - Profile Photo
// - Email
// - Password

// - Followers
