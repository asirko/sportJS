'use strict';

var express = require('express');
var controller = require('./programs.controller');

var router = express.Router();

router.get('/', controller.get);

module.exports = router;
