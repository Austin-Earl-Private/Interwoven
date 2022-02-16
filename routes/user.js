const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const jwt = require('../middleware/jwt-check');
router.get('/profile', userController.getProfile);

module.exports = router;
