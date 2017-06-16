'use strict';

module.exports = function(app) {

  app.use('/programs', require('./api/programs'));

};
