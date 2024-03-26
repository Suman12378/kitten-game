// gameRoute.js


const express = require('express');

const router = express.Router();

const { drawCard, updateScore, fetchGameState, updateAndCreat } = require('../controllers/gameController');

router.get('/draw-card', drawCard);    
router.post('/updatescore', updateScore);
router.post('/fetchstate', fetchGameState);
router.post('/updatestate', updateAndCreat); 
 
module.exports = router;   