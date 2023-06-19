// const express = require('express');
// const router = express.Router();
// const Author = require('./author.model');

// // Create a new author
// router.post('/', async (req, res) => {
//   try {
//     const { name, nationality, birthYear } = req.body;
//     const author = await Author.create({ name, nationality, birthYear });
//     res.status(201).json(author);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create author' });
//   }
// });

// // Get all authors
// router.get('/', async (req, res) => {
//   try {
//     const authors = await Author.find();
//     res.json(authors);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve authors' });
//   }
// });

// // Get a single author by ID
// router.get('/:id', async (req, res) => {
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
// router.put('/:id', async (req, res) => {
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
// router.delete('/:id', async (req, res) => {
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

// module.exports = router;
