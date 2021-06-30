const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
/**
 * Schema for storing user
 *  * Phone Number
 */
const schema = new mongoose.Schema(
  {
    phoneNumber: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(uniqueValidator);

const User = mongoose.model("User", schema);

module.exports = User;
