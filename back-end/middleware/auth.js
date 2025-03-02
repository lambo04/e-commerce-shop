// back-end/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: "Access denied: No token provided" });
    }
    
    // Support "Bearer <token>" format
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : authHeader;

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid token" });
    }
};

module.exports = { authMiddleware };
