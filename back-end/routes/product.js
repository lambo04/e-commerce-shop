const express = require('express');
const Product = require('../models/Product');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all products (Protected Route)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
