const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js');

// Home page - show all inventory items
router.get('/', indexController.getElements);

module.exports = router;