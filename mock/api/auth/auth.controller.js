'use strict';

const tokens = require('../auth/auth.token');

exports.login = function(req, res) {
  if (req.body.username === 'test' && req.body.password === 'test') {
    res.json({ token: tokens.test });
  } else {
    res.sendStatus(401);
  }
};
