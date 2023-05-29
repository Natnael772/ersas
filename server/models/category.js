const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  name: {
    type: String,
    enum: [
      "technology",
      "business",
      "art",
      "health",
      "politics",
      "entertainment",
      "education",
      "relationship",
      "personal",
      "religious",
      "other",
    ],
  },
});
module.exports = mongoose.model("Category", categorySchema);
