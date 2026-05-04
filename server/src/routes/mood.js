const express = require('express');
const router = express.Router();
const { getMoodConfig } = require('../controllers/moodController');
const jwt = require('jsonwebtoken');

// Optional auth — attaches user if token exists, continues either way
router.post('/', (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      // invalid token, just continue as guest
    }
  }
  next();
}, getMoodConfig);

module.exports = router;
