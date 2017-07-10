module.exports = function(app) {

  app.use('/programs', require('./api/programs'));
  app.use('/exercices', require('./api/exercices'));
  app.use('/auth', require('./api/auth'));
  app.use('/user', require('./api/user'));

};
