// const mongoose = require('mongoose');
// const Book = require('./models/book.model'); // Import the Book model

// const authorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   nationality: String,
//   birthYear: Number,
// });

// // Add pre('remove') middleware to remove associated books
// authorSchema.pre('remove', async function (next) {
//   try {
//     await Book.deleteMany({ author: this._id });
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// const Author = mongoose.model('Author', authorSchema);

// module.exports = Author;
