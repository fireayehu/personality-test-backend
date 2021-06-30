const mongoose = require("mongoose");

const Answer = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  start: {
    type: Number,
  },
  end: {
    type: Number,
  },
  img: {
    type: String,
    default: "default.png",
  },
});

const Choice = new mongoose.Schema({
  title: {
    type: String,
  },
  weight: {
    type: Number,
  },
});

const Question = new mongoose.Schema({
  title: {
    type: String,
  },
  choices: [Choice],
});

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    coverImg: {
      type: String,
      default: "default.png",
    },
    answers: [Answer],
    questions: [Question],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", schema);
