const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = 
  {
    image: "http://books.google.com/books/content?id=GoEyBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "Your Strategy Needs a Strategy",
    author: "Martin Reeves, Knut Haanaes",
    description:
      "You think you have a winning strategy. But do you? Executives are bombarded with bestselling ideas and best practices for achieving competitive advantage, but many of these ideas and practices contradict each other. Should you aim to be big or fast? Should you create a blue ocean, be adaptive, play to win—or forget about a sustainable competitive advantage altogether? In a business environment that is changing faster and becoming more uncertain and complex almost by the day, it’s never been more important—or more difficult—to choose the right approach to strategy. In this book, The Boston Consulting Group’s Martin Reeves, Knut Haanæs, and Janmejaya Sinha offer a proven method to determine the strategy approach that is best for your company. They start by helping you assess your business environment—how unpredictable it is, how much power you have to change it, and how harsh it is—a critical component of getting strategy right. They show how existing strategy approaches sort into five categories—Be Big, Be Fast, Be First, Be the Orchestrator, or simply Be Viable—depending on the extent of predictability, malleability, and harshness. In-depth explanations of each of these approaches will provide critical insight to help you match your approach to strategy to your environment, determine when and how to execute each one, and avoid a potentially fatal mismatch. Addressing your most pressing strategic challenges, you’ll be able to answer questions such as: • What replaces planning when the annual cycle is obsolete? • When can we—and when should we—shape the game to our advantage? • How do we simultaneously implement different strategic approaches for different business units? • How do we manage the inherent contradictions in formulating and executing different strategies across multiple businesses and geographies? Until now, no book brings it all together and offers a practical tool for understanding which strategic approach to apply. Get started today.",
    link: "http://books.google.com/books?id=GoEyBgAAQBAJ&printsec=frontcover&dq=Strategy&hl=&cd=1&source=gbs_api"
  }

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
