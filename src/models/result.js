const mongoose = require("mongoose");

const Content = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
    default: "default.png",
  },
});
const schema = new mongoose.Schema(
  {
    content: {
      type: Content,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Result", schema);
