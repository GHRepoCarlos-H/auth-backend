const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = hashPassword(password);
  try {
    const newUser = await User.create({ username, password: hashedPassword });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && comparePassword(password, user.password)) {
      const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
      res.json({ token });
    } else {
      res.status(400).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
