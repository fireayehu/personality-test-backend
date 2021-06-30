const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Question = require("../models/question");

dotenv.config();

mongoose
  .connect(process.env.DATABASE_STRING, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfuly");

    Question.create({
      title: "What kind of cook are you?",
      description: "Find out what kind of cook you are!",
      coverImg: "cover-242435423.png",
      answers: [
        {
          title: "You are an experimental cook!",
          description:
            "You turn everything into an adventure and cooking is no exception. Even if you use a recipe, it is sure that you will ignore it at some point. For you, cooking is art - and your art has lovers and haters both!",
          img: "result-4234928.png",
          start: 70,
          end: 100,
        },
        {
          title: "You are a perfectionist cook!",
          description:
            "Your cookery books are arranged alphabetically and your ingredients are measured to the last grain. For you, cookery is not a hobby, but a science. Just remember that a small mistake can make a dish taste heavenly!",
          img: "result-42793.png",
          start: 45,
          end: 70,
        },
        {
          title: "You are a quick cook",
          description:
            "Practical and usually busy with more important things, you believe that food is there mostly to keep us alive. So you have a repertoire of three dishes and you prepare them almost automatically. At least you won't starve!",
          img: "result-429384.png",
          start: 0,
          end: 45,
        },
      ],
      questions: [
        {
          title: "Which carb do you mostly use?",
          choices: [
            {
              title: "rice",
              weight: 40,
            },
            {
              title: "pasta",
              weight: 35,
            },
            {
              title: "bread",
              weight: 25,
            },
          ],
        },
        {
          title: "When you cook, you leave the kitchen",
          choices: [
            {
              title: "Tider than it was ",
              weight: 40,
            },
            {
              title: "a creative mess",
              weight: 35,
            },
            {
              title: "exactly as it was",
              weight: 25,
            },
          ],
        },
        {
          title: "Your favourite restaurants are",
          choices: [
            {
              title: "gourmet and Expensive ",
              weight: 40,
            },
            {
              title: "small and ethnic",
              weight: 35,
            },
            {
              title: " fast food joints ",
              weight: 25,
            },
          ],
        },
        {
          title: "When you throw a party, everyone admires the",
          choices: [
            {
              title: "cooking",
              weight: 40,
            },
            {
              title: "atmosphere",
              weight: 35,
            },
            {
              title: "coordination",
              weight: 25,
            },
          ],
        },
        {
          title: "You can't cook anything without",
          choices: [
            {
              title: "My multi-speed mixer",
              weight: 40,
            },
            {
              title: "My collection of spices",
              weight: 35,
            },
            {
              title: "My frying pan",
              weight: 25,
            },
          ],
        },
      ],
    })
      .then(() => {
        console.log("Quesiton created successfully");
      })
      .catch((err) => console.log(err));
  });
