const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clapSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
});

module.exports = mongoose.model("Clap", clapSchema);
