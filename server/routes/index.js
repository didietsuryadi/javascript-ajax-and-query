var express = require('express');
var router = express.Router();
var controller = require('../controllers/colorController')

/* GET color. */
router.get('/color', controller.changeColor);

module.exports = router;
