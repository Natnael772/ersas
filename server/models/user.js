const mongoose = require("mongoose");
const Blog = require("../models/blog");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,

  // socialMediaLinks: {
  //   twitter: String,
  //   facebook: String,
  //   linkedin: String,
  //   telegram:String,
  //   instagram:String
  // },

  profilePhoto: String,
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
  },

  // followers: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // following: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

module.exports = mongoose.model("User", userSchema);

// clappers: [{ clapperId: Schema.Types.ObjectId }],
// comments: [{ commentId: Schema.Types.ObjectId, comment: String }],
// claps: {
//   number: Number,
//   clappers: [
//     {
//       clapperId: Schema.Types.ObjectId,
//     },
//   ],
// },
// blogs: [
//   {
//     quantity: Number,
//     [{blogId: Schema.Types.ObjectId}],
//   },

// ],
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
