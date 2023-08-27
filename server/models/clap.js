const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clapSchema = new Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Clap", clapSchema);
