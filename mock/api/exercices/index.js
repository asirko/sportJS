const express = require('express');
const controller = require('./exercices.controller');
const requireLogin = require('../auth/auth.middleware').requireLogin;

const router = express.Router();

router.use(requireLogin);

router.get('/', controller.get);
router.get('/:id', controller.getSingle);
router.delete('/:id', controller.delete);

module.exports = router;
