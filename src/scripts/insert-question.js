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
      title: "What is your parenting style?",
      description: "Get to know your parenting style",
      coverImg: "cover-234234423.png",
      answers: [
        {
          title: "Authoritarian Parenting",
          description:
            "Authoritarian parents are often thought of as disciplinarians",
          img: "result-4023842930.png",
          start: 80,
          end: 100,
        },
        {
          title: "Permissive Parenting",
          description:
            "Permissive or Indulgent parents mostly let their children do what they want, and offer limited guidance or direction. They are more like friends than parents",
          img: "result-12343729.png",
          start: 60,
          end: 80,
        },
        {
          title: "Uninvolved Parenting",
          description:
            "Uninvolved parents give children a lot of freedom and generally stay out of their way. Some parents may make a conscious decision to parent in this way, while others are less interested in parenting or unsure of what to do",
          img: "result-847892639.png",
          start: 50,
          end: 60,
        },
        {
          title: "Authoritative Parenting",
          description:
            "Authoritative parents are reasonable and nurturing, and set high, clear expectations. Children with parents who demonstrate this style tend to be self-disciplined and think for themselves. This style is thought to be most beneficial to children",
          img: "result-472964.png",
          start: 0,
          end: 50,
        },
      ],
      questions: [
        {
          title: "what is your discipline style?",
          choices: [
            {
              title:
                "you use a strict discipline style with little negotiation possible. Punishment is common",
              weight: 25,
            },
            {
              title:
                "your discipline style is the opposite of strict. They have limited or no rules and mostly let children figure problems out on their own",
              weight: 20,
            },
            {
              title:
                "No particular discipline style is utilized. An uninvolved parent lets a child mostly do what he wants, probably out of a lack of information or caring",
              weight: 15,
            },
            {
              title:
                "Disciplinary rules are clear and the reasons behind them are explained",
              weight: 10,
            },
          ],
        },
        {
          title: "your type of communication?",
          choices: [
            {
              title:
                "Communication is mostly one way: from parent to child. Rules usually are not explained",
              weight: 25,
            },
            {
              title:
                "Communication is open but these parents let children dechemselves rather than giving direction",
              weight: 20,
            },
            {
              title: "Communication is limited",
              weight: 15,
            },
            {
              title:
                "Communication is frequent and appropriate to the child’s level of understanding",
              weight: 10,
            },
          ],
        },
        {
          title: "your type of approach to your child?",
          choices: [
            {
              title: "Less nurturing",
              weight: 25,
            },
            {
              title: "Warm and nurturing",
              weight: 20,
            },
            {
              title: "Offers little nurturing",
              weight: 15,
            },
            {
              title: "Nurturing",
              weight: 10,
            },
          ],
        },
        {
          title: "your expectations from your child are?",
          choices: [
            {
              title: "Expectations are high with limited flexibility",
              weight: 25,
            },
            {
              title:
                "Expectations are typically minimal or not set by these parents",
              weight: 20,
            },
            {
              title: "There are few or no expectations of children",
              weight: 15,
            },
            {
              title:
                "Expectations and goals are high but stated clearly. Children may have input into goals",
              weight: 10,
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
