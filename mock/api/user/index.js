const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

// crud
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);

// other
router.post('/login', controller.getUser);
router.get('/logout', controller.logout);
router.get('/refreshConnected', controller.refreshUser);

module.exports = router;
