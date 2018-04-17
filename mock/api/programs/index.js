const express = require('express');
const controller = require('./programs.controller');

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.create);

router.get('/:id', controller.getSingle);
router.post('/:id', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;
