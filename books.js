// routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../module/bookmodule');

// CRUD operations for books
// Example: GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;