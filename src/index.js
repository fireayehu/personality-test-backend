const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const userRouter = require("./routes/user");
const questionRouter = require("./routes/question");
const resultRouter = require("./routes/result");

dotenv.config();

const app = express();

/**
 * Connection to the database
 */
mongoose
  .connect(process.env.DATABASE_STRING, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfuly");
  });

/**
 * Middleware
 */
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/**
 * Route Middleware
 */

app.use("/api/v1/users", userRouter);
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/results", resultRouter);

app.use("*", (req, res, next) => {
  res.status(400).json({
    status: "error",
    message: `The requested url ${req.originalUrl} doesnot exist`,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
