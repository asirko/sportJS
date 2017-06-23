'use strict';

const tokens = require('../auth/auth.token');

exports.getUser = function(req, res) {
  if (req.body.token === tokens.test) {
    res.json({ username: 'test' });
  }
};
