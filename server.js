// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Author schema
// const authorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   nationality: {
//     type: String,
//     required: true,
//   },
//   birthYear: {
//     type: Number,
//     required: true,
//   },
// });

// // Define Book schema
// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Author',
//     required: true,
//   },
//   publishedYear: {
//     type: Number,
//     required: true,
//   },
// });

// // Define Author model
// const Author = mongoose.model('Author', authorSchema);

// // Define Book model
// const Book = mongoose.model('Book', bookSchema);

// // Create a new author
// app.post('/authors', async (req, res) => {
//   try {
//     const { name, nationality, birthYear } = req.body;
//     const author = await Author.create({ name, nationality, birthYear });
//     res.status(201).json(author);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create author' });
//   }
// });

// // Get all authors
// app.get('/authors', async (req, res) => {
//   try {
//     const authors = await Author.find();
//     res.json(authors);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve authors' });
//   }
// });

// // Get a single author by ID
// app.get('/authors/:id', async (req, res) => {
//   try {
//     const author = await Author.findById(req.params.id);
//     if (!author) {
//       return res.status(404).json({ error: 'Author not found' });
//     }
//     res.json(author);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve author' });
//   }
// });

// // Update an author
// app.put('/authors/:id', async (req, res) => {
//   try {
//     const { name, nationality, birthYear } = req.body;
//     const author = await Author.findByIdAndUpdate(
//       req.params.id,
//       { name, nationality, birthYear },
//       { new: true }
//     );
//     if (!author) {
//       return res.status(404).json({ error: 'Author not found' });
//     }
//     res.json(author);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update author' });
//   }
// });

// // Delete an author
// app.delete('/authors/:id', async (req, res) => {
//   try {
//     const author = await Author.findByIdAndDelete(req.params.id);
//     if (!author) {
//       return res.status(404).json({ error: 'Author not found' });
//     }
//     res.json({ message: 'Author deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete author' });
//   }
// });

// // Create a new book
// app.post('/books', async (req, res) => {
//   try {
//     const { title, author, publishedYear } = req.body;
//     const book = await Book.create({ title, author, publishedYear });
//     res.status(201).json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create book' });
//   }
// });

// // Get all books
// app.get('/books', async (req, res) => {
//   try {
//     const books = await Book.find().populate('author');
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve books' });
//   }
// });

// // Get a single book by ID
// app.get('/books/:id', async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id).populate('author');
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve book' });
//   }
// });

// // Update a book
// app.put('/books/:id', async (req, res) => {
//   try {
//     const { title, author, publishedYear } = req.body;
//     const book = await Book.findByIdAndUpdate(
//       req.params.id,
//       { title, author, publishedYear },
//       { new: true }
//     ).populate('author');
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update book' });
//   }
// });

// // Delete a book
// app.delete('/books/:id', async (req, res) => {
//   try {
//     const book = await Book.findByIdAndDelete(req.params.id);
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json({ message: 'Book deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete book' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
