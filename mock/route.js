module.exports = function(app) {

  app.use('/programs', require('./api/programs'));
  app.use('/exercices', require('./api/exercices'));
  app.use('/users', require('./api/user'));

};
