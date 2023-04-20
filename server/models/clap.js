const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const clapSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
