const express = require("express");
const questionController = require("../controllers/question");
const { verifyUser } = require("../middlewares/auth");
const router = express.Router();

router.get("/single", verifyUser, questionController.getSingleBook);
router.post("/submit", verifyUser, questionController.submitAnswer);
router.route("/:id").get(verifyUser, questionController.getBook);

module.exports = router;
