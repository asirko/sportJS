const programs = require('./mockValues').programs;

// Get list of contacts
exports.get = function(req, res) {
  res.json(programs);
};

// add a new program to the list
exports.create = function(req, res) {
  programs.push(req.body);
  res.sendStatus(200);
};

// change an existing program into the list
exports.getSingle = function(req, res) {
  res.send(programs[req.params.id]);
};

// change an existing program into the list
exports.post = function(req, res) {
  programs[req.params.id] = req.body;
  res.sendStatus(200);
};

// delete a program into the list
exports.delete = function(req, res) {
  programs.splice(req.params.id, 1);
  res.sendStatus(200);
};
