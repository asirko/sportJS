
const tokens = require('../auth/auth.token');

exports.requireLogin = function (req, res, next) {

  next();

  // const authorization = req.header('Authorization');
  // let token;
  // if (authorization) {
  //   token = /^Bearer (.*)/.exec(authorization)[1];
  // }
  // if (token === tokens.test) {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
};
