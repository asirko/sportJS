const tokens = require('../auth/auth.token');

exports.getUser = function(req, res) {
  if (req.body.token === tokens.test) {
    setTimeout(function () {
      res.json({ username: 'test' });
    }, 1000)
  }
};
