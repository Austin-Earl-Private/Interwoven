const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search');

router.post('/search', searchController.search);


module.exports = router;
