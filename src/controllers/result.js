const Result = require("../models/result");
const { validationResult } = require("express-validator");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getResults = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const results = await Result.find({ user: req.user._id }).populate(
      "question",
      "-answers -questions"
    );
    res.status(200).json({
      status: "success",
      results,
    });
  } catch (err) {
    //TODO
  }
};
