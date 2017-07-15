const exercices = require('./mockValues').exercices;

// Get list of exercices
exports.get = function(req, res) {
  res.json(exercices);
};

// change an existing exercice into the list
exports.getSingle = function(req, res) {
  res.send(exercices[req.params.id]);
};

// delete a exercice into the list
exports.delete = function(req, res) {
  exercices.splice(req.params.id, 1);
  res.sendStatus(200);
};
