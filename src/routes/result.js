const express = require("express");
const resultController = require("../controllers/result");
const { verifyUser } = require("../middlewares/auth");
const router = express.Router();

router.route("/").get(verifyUser, resultController.getResults);

module.exports = router;
