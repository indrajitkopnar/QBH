// const Book = require('./models/book.model');

// exports.createBook = async (req, res) => {
//   try {
//     const { title, author, publishedYear } = req.body;
//     const book = await Book.create({ title, author, publishedYear });
//     res.status(201).json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create book' });
//   }
// };

// exports.getBooks = async (req, res) => {
//   try {
//     const books = await Book.find().populate('author');
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve books' });
//   }
// };

// exports.getBookById = async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id).populate('author');
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve book' });
//   }
// };

// exports.updateBook = async (req, res) => {
//   try {
//     const { title, author, publishedYear } = req.body;
//     const book = await Book.findByIdAndUpdate(
//       req.params.id,
//       { title, author, publishedYear },
//       { new: true }
//     );
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update book' });
//   }
// };

// exports.deleteBook = async (req, res) => {
//   try {
//     const book = await Book.findByIdAndDelete(req.params.id);
//     if (!book) {
//       return res.status(404).json({ error: 'Book not found' });
//     }
//     res.json({ message: 'Book deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete book' });
//   }
// };
