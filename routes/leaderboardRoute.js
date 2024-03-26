// leaderboardRoute.js

const express = require('express');

const getWinnners = require('../controllers/leaderboardController')

const router = express.Router();

router.post('/leaderboard', getWinnners);

module.exports = router;

