const express = require('express');

const router = express.Router();

const { loginUser, registerUser } = require('../controllers/userController');
const protectRoute = require('../middleware/protectRoute');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;