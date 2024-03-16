// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../module/usermodule');

// CRUD operations for users
// Example: GET all users
router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;