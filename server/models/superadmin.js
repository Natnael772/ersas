const app = require("express")();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const superadminSchema = new Schema({
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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  bio: String,
  // links: String,
  // links: {
  //   twitter: String,
  //   facebook: String,
  //   linkedin: String,
  // },
  // photo: String,
  // role: {
  //   type: String,
  //   enum: ["admin", "superadmin"],
  // },
});
module.exports = mongoose.model("Superadmin", superadminSchema);
