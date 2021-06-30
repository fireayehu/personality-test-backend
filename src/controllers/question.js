const Question = require("../models/question");
const Result = require("../models/result");
const { validationResult } = require("express-validator");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getSingleBook = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const result = await Result.find({
      user: req.user._id,
    });
    const rId = result.map((r) => r.question);

    const question = await Question.findOne(
      {
        _id: { $nin: rId },
      },
      "-answers -questions"
    );
    res.status(200).json({
      status: "success",
      question,
    });
  } catch (err) {
    //TODO
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getBook = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const question = await Question.findById(req.params.id, "-answers");
    if (!question) {
      return res.status(400).json({
        status: "error",
        message: "Question does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      question,
    });
  } catch (err) {
    //TODO
  }
};
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.submitAnswer = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const question = await Question.findById(req.body.question);

    const weight = question.questions.reduce((prev, curr) => {
      const choice = curr.choices.find(
        (c) => c._id == req.body.answers[curr._id]
      );
      return prev + choice.weight;
    }, 0);

    let result;
    question.answers.forEach((answer) => {
      if (weight >= answer.start && weight <= answer.end) {
        result = answer;
      }
    });

    await Result.create({
      user: req.user._id,
      question: question._id,
      content: {
        title: result.title,
        description: result.description,
        img: result.img,
      },
    });

    res.status(200).json({
      status: "success",
      result,
      weight,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
