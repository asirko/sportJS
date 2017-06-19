'use strict';

var express = require('express');
var controller = require('./programs.controller');

var router = express.Router();

router.get('/', controller.get);
router.post('/', controller.create);

router.get('/:id', controller.getSingle);
router.post('/:id', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;
