const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;

// Signup
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    try {
        await User.create({ name, email, password: hash });
        res.redirect("http://localhost:5500/frontend/login.html");
    } catch (err) {
        res.status(400).send("Email already exists");
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid password");

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

// Protected route (optional)
router.get('/me', async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        res.json(user);
    } catch {
        res.status(401).send("Unauthorized");
    }
});

module.exports = router;
