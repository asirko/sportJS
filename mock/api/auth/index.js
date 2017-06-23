'use strict';

const express = require('express');
const controller = require('./auth.controller.js');

const router = express.Router();

router.post('/', controller.login);

module.exports = router;
