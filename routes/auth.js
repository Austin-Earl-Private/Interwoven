const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const jwt = require('../middleware/jwt-check');

router.post('/sign-up', authController.signUp);
router.post('/login', jwt, authController.login);

router.post('/changePassword', jwt, authController.changePassword);

module.exports = router;
