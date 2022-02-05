const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/sign-up', authController.signUp);
router.post('/login', authController.login);

module.exports = router;
