const express = require('express');
const router = express.Router();
const { Data, User } = require('../models');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
    req.userId = decoded.id;
    next();
  });
};

router.get('/mydata', authenticate, async (req, res) => {
  try {
    const data = await Data.findAll({ where: { userId: req.userId } });
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
