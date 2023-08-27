const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");

const followingSchema = new Schema({
  //the user
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  //the users that the above user follows
  followingId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Following", followingSchema);
