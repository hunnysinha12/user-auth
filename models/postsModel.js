const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title is require"],
      trim: true,
    },
    description: {
      type: String,
      require: [true, "Description is require"],
      trim: true,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Post", postSchema);
