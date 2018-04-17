const express = require('express');
const controller = require('./exercices.controller');

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getSingle);
router.delete('/:id', controller.delete);

module.exports = router;
