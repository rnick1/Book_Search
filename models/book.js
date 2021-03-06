const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  image: String,
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
